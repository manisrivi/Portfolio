import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap, FaAws } from "react-icons/fa";
import {
  SiMaterialui,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { DiGit } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

export default function Skills() {
  return (
    <div className="container" id='skills'>
      <h2 className="text-center font-1">Skills</h2>
      <div className="row mx-auto mt-5 fontColor p-3">
        <div className="col d-flex justify-content-evenly gap-5">
          <h1 className="text-center">
            <ImHtmlFive /> <br />
            <p className="h6">HTML 5</p>
          </h1>
          <h1 className="text-center">
            <IoLogoJavascript />
            <br />
            <p className="h6">JavaScript</p>
          </h1>
          <h1 className="text-center">
            <DiCss3 />
            <br />
            <p className="h6">CSS 3</p>
          </h1>
        </div>
      </div>
      <div className="row mx-auto fontColor p-3">
        <div className="col d-flex justify-content-evenly gap-5">
          <h1 className="text-center">
            <FaBootstrap />
            <br />
            <p className="h6">Bootstrap</p>
          </h1>
          <h1 className="text-center">
            <SiMaterialui /> <br />
            <p className="h6">MUI</p>
          </h1>
          <h1 className="text-center">
            <SiTailwindcss />
            <br />
            <p className="h6">Tailwind</p>
          </h1>
        </div>
      </div>
      <div className="row mx-auto fontColor p-3">
        <div className="col d-flex justify-content-evenly gap-5">
          <h1 className="text-center">
            <RiReactjsLine />
            <br />
            <p className="h6">React Js</p>
          </h1>
          <h1 className="text-center">
            <IoLogoNodejs />
            <br />
            <p className="h6">Node Js</p>
          </h1>
          <h1 className="text-center">
            <SiExpress />
            <br />
            <p className="h6">Express JS</p>
          </h1>
        </div>
      </div>
      <div className="row mx-auto fontColor p-3">
        <div className="col d-flex justify-content-evenly gap-5">
          <h1 className="text-center">
            <SiMongodb />
            <br />
            <p className="h6">Mongo DB</p>
          </h1>
          <h1 className="text-center">
            <DiGit />
            <br />
            <p className="h6">Git</p>
          </h1>
          <h1 className="text-center">
            <FaAws />
            <br />
            <p className="h6">AWS</p>
          </h1>
        </div>
      </div>
      <div className="row mx-auto fontColor p-3">
        <div className="col d-flex justify-content-evenly gap-5">
          <h1 className="text-center">
            <SiRedux />
            <br />
            <p className="h6">Redux</p>
          </h1>
          <h1 className="text-center">
            <SiPostman />
            <br />
            <p className="h6">Postman</p>
          </h1>
          <h1 className="text-center">
            <GrMysql />
            <br />
            <p className="h6">MySQL</p>
          </h1>
        </div>
      </div>
      <div className="row mx-auto fontColor p-3">
        <div className="col d-flex justify-content-evenly gap-5">
          <h1 className="text-center">
            <SiHeroku />
            <br />
            <p className="h6">Heroku</p>
          </h1>
        </div>
      </div>
    </div>
  );
}
