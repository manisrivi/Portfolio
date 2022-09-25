import React from "react";

export default function About() {
  return (
    <div className="container mb-5">
      <div className="row justify-content-center m-3" id="about">
        <h2 className="text-center font-1" id="About">
          About Me
        </h2>
        {/* Image */}
        <div className="col-lg-5">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-in-office-3455479-2929000.png"
            className="w-100"
            alt=""
          />
        </div>
        {/* About Content */}
        <div className="col-lg-7 mt-5">
          <h6 className='font-1 text-secondary'>
            Team- oriented and smart working aspiring full stack web developer
            with great leadership skills. Having keep interest in MERN and
            JavaScript and wish to secure an entry level role with an
            organization where I can utilize and further develop my skills.
          </h6>
        </div>
      </div>
    </div>
  );
}
