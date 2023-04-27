import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Profile from "./Profile";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FcDownload } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import Profile2 from "./Profile2";
function Home({ data }) {
  useEffect(()=>{
    AOS.init({delay: 2000});
  },[])
  return (
    <>
      <section className=" container " id="home">
        <div className="row row-cols-lg-2 row-cols-sm-1 mt-md-5 mt-5">
        <div data-aos="fade-right" className="name fingerpaint mw-100 m-auto col m-sm-auto">
            <h3 className="trispace intro">Hello! 👋 My name is</h3>
            <h1 className={` ${data ? "text-light" : "text-dark"} `}>
              DIVYA Udhayakumar
            </h1>
            {/* TypingFont */}
            <div className="fs-5 fs-sm-6 trispace p-0 m-0 typewriter">
              <Typewriter
                options={{
                  strings: [`I'm a Full-Stack Developer`, "I Build Websites!"],
                  autoStart: true,
                  loop: true,
                  fontFamily: "Trispace",
                }}
              />
            </div>
            <h6
              className={` ${
                data ? "text-light" : "text-dark"
              } trispace quote mt-2`}
            >
              A self-taught developer with an interest in Computer Science.
            </h6>
            <div className="mt-lg-3 mt-auto fs-1 icons">
              <FaGithub
               className={`github`}
                color={` ${data ? "white" : "black"} `}
                onClick={() =>
                  window.open("https://github.com/DivyaUdhay", "_blank")
                }
              />{" "}
              <FaLinkedin
                className={`linkedin`}
                color={` ${data ? "white" : "black"} `}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in",
                    // "https://www.linkedin.com/in/divya-b-8026071a3/"
                    "_blank"
                  )
                }
              />{" "}
              
            <SiGmail
                className={`gmail`}
                color={` ${data ? "white" : "black"} `}
                onClick={() =>
                  window.open("mailto:divyaudhayakumar.r@gmail.com", "_blank")
                }
              />{" "}
              <FcDownload
                onClick={() =>
                  window.open("https://drive.google.com/file/d/1HuW08Y1pV4qUw4k-h-FP8qrznOWvhluX/view?usp=share_link",
                    // "https://drive.google.com/file/d/1Npq2lsTOsNWkn63jbjHf4KVk_3klNPtl/view?usp=sharing/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div data-aos="fade-left" className="mw-50 m-auto profile col d-lg-inline d-md-none d-none  ">
            <Profile />
          </div>
          <div data-aos="fade-left" className="d-lg-none d-md-block profile2">
            <Profile2 />
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;