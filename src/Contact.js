import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FcPhoneAndroid } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
function Contact() {
  return (
    <>
      <section className="m-lg-5 " id="contact">
        <h1 className="fingerpaint about-head">Contact me</h1>
        <div class="container-fluid px-4 mt-5">
          <div class="row gx-5 gy-4">
            <div class="col">
              <div
                style={{ backgroundColor: "#c11625" }}
                class="contact-pill p-2 border rounded-pill d-flex align-center justify-center  border-danger"
                onClick={() =>
                  window.open("mailto:divyaudhayakumar.r@gmail.com", "_blank")
                }
              >
                <AiOutlineMail
                  color="#c71610"
                  size={80}
                  className="me-2 border inside  rounded-circle p-2 d-flex justify-content-start"
                />
                <div className="d-flex align-items-center">
                  <p className="fs-4 m-0">divyaudhayakumar.r@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                style={{ backgroundColor: "#128C7E" }}
                class="contact-pill p-2 border rounded-pill d-flex align-items-center justify-center border-success"
                onClick={() => window.open("callto://+917373203167", "_blank")}
              >
                <FcPhoneAndroid
                  size={80}
                  className="me-5 border inside rounded-circle p-2 d-flex justify-content-start"
                />
                <div className="d-flex align-items-center">
                  <p className="fs-4 m-0">7373203167</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                style={{ backgroundColor: "#128C7E" }}
                class="contact-pill p-2 border rounded-pill d-flex align-items-center justify-center border-success"
                onClick={() =>
                  window.open("https://wa.me/+917373203167", "_blank")
                }
              >
                <ImWhatsapp
                  color="#25D366"
                  size={80}
                  className="me-5 border inside rounded-circle p-2 d-flex justify-content-start"
                />
                <div className="d-flex align-items-center">
                  <p className="fs-4 m-0">7373203167</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                style={{ backgroundColor: "#0a66c2" }}
                class="contact-pill p-2 border rounded-pill d-flex align-items-center justify-center border-primary "
                onClick={() =>
                  window.open(
                    // "https://www.linkedin.com/in/pavithran-b-8026071a3/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin
                  color="#0a66c2"
                  size={80}
                  className="me-5 border inside rounded-circle p-2 d-flex justify-content-start"
                />
                <div className="d-flex align-items-center">
                  <p className="fs-3 m-0">Linkedin</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;