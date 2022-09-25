import React, { useState } from "react";
import { Link } from "react-scroll";
import styled, { ThemeProvider } from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Qualification from "./Qualification";
import Skills from "./Skills";
import { BsSun } from "react-icons/bs";
import { darkTheme, GlobalStyles, lightTheme } from "./themes";
import { MdOutlineDarkMode } from "react-icons/md";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // Toggle description
  const [show, setShow] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <nav class="navbar navbar-expand-lg fixed-top bg-white">
            <div class="container">
              <a class="navbar-brand font fw-bold" id="font-1-color" href="#">
                <span className="h1 fw-bold"> MS</span>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 font-1 gap-4">
                  <li class="nav-item text-center" onClick={() => setShow(!show)}>
                    {show ? (
                      <button className="btn border-0" onClick={() => themeToggler()}>
                        <BsSun />
                      </button>
                    ) : (
                      <button className='btn border-0' onClick={() => themeToggler()}>
                        <MdOutlineDarkMode/>
                      </button>
                    )}
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link btn border-0 w-100"
                      aria-current="page"
                      href="#"
                    >
                      <Link to="main" spy={true} offset={-80}>
                        {" "}
                        Home{" "}
                      </Link>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link btn border-0 w-100"
                      aria-current="page"
                      href="#"
                    >
                      <Link to="about" spy={true} offset={0}>
                        {" "}
                        About{" "}
                      </Link>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link btn border-0 w-100"
                      aria-current="page"
                      href="#"
                    >
                      <Link to="skills" spy={true} offset={-80}>
                        {" "}
                        Skills{" "}
                      </Link>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link btn border-0 w-100"
                      aria-current="page"
                      href="#"
                    >
                      <Link to="project" spy={true} offset={-80}>
                        {" "}
                        Project{" "}
                      </Link>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link btn border-0 w-100"
                      aria-current="page"
                      href="#"
                    >
                      <Link to="contact" spy={true} offset={-80}>
                        {" "}
                        Contact{" "}
                      </Link>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="nav-link btn border-0 w-100"
                      aria-current="page"
                      href="#"
                    >
                      <Link to="qualification" spy={true} offset={-80}>
                        {" "}
                        Qualification{" "}
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Home />
          <About />
          <Skills />
          <Qualification />
          <Projects />
          <Contact />
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </div>
  );
}
