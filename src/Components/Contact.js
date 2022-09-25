import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

import axios from "axios";
import toast from "react-hot-toast";

export default function Contact() {
  // Validation Schema
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    subject: Yup.string().required(),
    message: Yup.string().required(),
  });

  return (
    <div className="container Contact" id="contact">
      <h1 className="text-center font-1">Contact</h1>
      <div className="row mt-5 mx-auto justify-content-center">
        {/* Information */}
        <div className="col-lg-5 col-sm-1 col-md-6 d-flex flex-column gap-4 font-1 mx-auto">
          <div>
            <h6 className="fw-bold">Email</h6>
            <h6 className="fw-bold text-secondary">manisrivi1995@gmail.com</h6>
          </div>
          <div>
            <h6 className="fw-bold">WhatsApp / Phone</h6>
            <h6 className="fw-bold text-secondary">9092794276</h6>
          </div>
          <div>
            <h6 className="fw-bold">Facebook</h6>
            <h6 className="fw-bold text-secondary">
              https://www.facebook.com/profile.php?id=100003616061837
            </h6>
          </div>
        </div>
        {/* Form */}
        <div className="col-lg-4 col-sm-2 p-4 col-md-6 rounded-3 shadow mx-auto border">
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={async (values, { resetForm }) => {
              const form = {
                email: "noodlecountry@gmail.com",
                message: `<br/>
                ${values.message} <br/>
                Regards <br/>
                ${values.name}
                `,
                subject: values.subject,
                name: `${values.name}`,
              };
              try {
                toast.success("Send Successfully");
                // send mail to user api call
                await axios.post(
                  `https://noodlecountry.herokuapp.com/auth/sendmail`,
                  form
                );
                resetForm({ values: "" });
              } catch (error) {
                console.log(error.message);
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className="">
                <div className="d-flex flex-column gap-3 text-center">
                  {/* your name */}
                  <div>
                    <Field
                      className="form-control"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  {errors.name && touched.name ? (
                    <span className="text-danger text-start">
                      *{errors.name}*
                    </span>
                  ) : null}
                  {/* your email */}
                  <div>
                    <Field
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <span className="text-danger text-start">
                      *{errors.email}*
                    </span>
                  ) : null}
                  {/* your subject */}
                  <div>
                    <Field
                      className="form-control"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  {errors.subject && touched.subject ? (
                    <span className="text-danger text-start">
                      *{errors.subject}*
                    </span>
                  ) : null}
                  {/* your message */}
                  <div>
                    <Field
                      component="textarea"
                      className="form-control"
                      name="message"
                      placeholder="Message"
                    />
                  </div>
                  {errors.message && touched.message ? (
                    <span className="text-danger text-start">
                      *{errors.message}*
                    </span>
                  ) : null}
                  {/* button */}
                  <div>
                    <button
                      type="submit"
                      id="bgColor"
                      className="w-100 btn text-white fw-bold"
                    >
                      Send <i class="uil uil-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
