import React from "react";
import home from "../Images/home.PNG";

export default function Projects() {
  return (
    <div className="container Projects" id='project'>
      <h1 className="text-center mt-5 font-1" >Projects</h1>
      <div className="row m-5 mx-auto justify-content-center gap-3">
        {/* Project Image */}
        <div className="col-lg-5 col-sm-5 text-center">
          <img src={home} alt="" className="w-75 rounded-3 shadow" />
        </div>
        {/* Project description */}
        <div className="col-lg-6 col-sm-6">
          <h6 className="text-center fw-bold font-1">Food delivery website</h6>
          <h6 className="font-1 text-secondary mt-3">
            Website adaptable to all devices, with UI components and
            Interactions. End to end mail integrations with tracking status and
            more features implemented this site
          </h6>
          <a href='https://master.d39lbkrz4ack24.amplifyapp.com/'  target='_blank' className="btn font-1 text-white fw-bold mt-3" id="bgColor">
            Demo <i class="uil uil-angle-double-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
