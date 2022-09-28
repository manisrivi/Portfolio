import React from "react";
import photo from "../Images/photo.png";

export default function Home() {
  return (
    <div id="main">
      <div className="container mt-5" >
        <div className="row mx-auto justify-content-center" id="home">
          {/* content */}
          <div className="col-lg-6 col-md-5 col-sm-6 m-2 mt-5" >
            <div>
              <h1 className="fw-bold" id="font-1-color">
                Hi, I'am Manikandan S
              </h1>
              <h4 className="mt-2 fw-bold">Full Stack Developer</h4>
              <h6 className="mt-4 normalFont fw-bold text-secondary">
                Good experience in web design and development knowledge, <br />{" "}
                producing quality work
              </h6>
              <a href='https://drive.google.com/file/d/1ZfaL8Q1Np4AEBbeknlmgECVtMnyfny6M/view?usp=sharing' target='_blank' className="btn mt-4 text-white fw-bold" id="bgColor">
                Resume
                <i class="uil uil-angle-double-right"></i>
              </a>
            </div>
          </div>
          {/* Profile */}
          <div className="col-lg-4 col-md-5 col-sm-6 text-start mt-4">
            <div className="text-center">
              <img src={photo} alt="" className="w-75" />
              <div className="d-flex gap-5 justify-content-center mt-2">
                <a
                  href="https://www.linkedin.com/in/manikandan-s-b862779b/"
                  target="_blank"
                >
                  <i class="uil uil-linkedin-alt h5" id="font-1-color"></i>
                </a>
                <a href="https://www.instagram.com/mani270195/" target="_blank">
                  <i class="uil uil-instagram h5" id="font-1-color"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100003616061837"
                  target="_blank"
                >
                  <i class="uil uil-facebook-f h5" id="font-1-color"></i>
                </a>
                <a href="https://github.com/manisrivi" target="_blank">
                  <i class="uil uil-github-alt h5" id="font-1-color"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
