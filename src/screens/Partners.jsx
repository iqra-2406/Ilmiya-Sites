import React from "react";
import Header from "../components/Header";
import vector1 from "../assets/images/vector1.svg";
import vector2 from "../assets/images/vector2.svg";
import vector3 from "../assets/images/vector3.svg";
import { IoMdArrowForward } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import CompanyLogo1 from "../assets/images/CompanyLogo1.png";
import CompanyLogo2 from "../assets/images/CompanyLogo2.png";
import CompanyLogo3 from "../assets/images/CompanyLogo3.png";
import CompanyLogo4 from "../assets/images/CompanyLogo4.png";
import CompanyLogo5 from "../assets/images/CompanyLogo5.png";
import stream from "../assets/images/stream.png";
import glob from "../assets/images/glob.png";
import MotherCards from "../components/MotherCards";
import Footer from "../components/Footer";


const Partners = () => {
  return (
    <>
      <Header />
      <section className="partners-layout">
        <div className="container">
          <div className="discover-wrapper">
            <strong>Ilmiya Cloud Platfrom</strong>
            <h2 className="h2">
              Our features you love. <br />
              And even <span className="pink">More to discover</span>
            </h2>
            <div className="both-cubes">
              <div className="vectors">
                <img src={vector3} alt="vector3" />
              </div>
              <span>+</span>
              <div className="vectors">
                <img src={vector1} alt="vector" />
              </div>
            </div>
            <div className="both-buttons">
              <a href="#" className="btn-style colored-border">
                Get Started
                <IoMdArrowForward />
              </a>
              <a href="#" className=" btn-style blue">
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="Empowering-future">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Empowering <span className="blue"> Education:</span> <br /> Our
              LMS Journey
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br />
              the way individuals engage with learning.
            </p>
          </div>

          <div className="row">
            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="scalable-data">
                <strong>A scalable, reliable platform</strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="scalable-data">
                <strong>A scalable, reliable platform</strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="scalable-data">
                <strong>A scalable, reliable platform</strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
              </div>
            </div>
          </div>
          <div className="more-infoo">
            <a href="#" className="btn-style colored-border">
              Learn more <GoArrowRight />
            </a>
          </div>
        </div>
        <div className="empowering-2">
          <div className="container">
            <div className="Nature-wrapper">
              <h2>
                Empowering <span className="blue"> Education:</span> <br /> Our
                LMS Journey
              </h2>
              <p>
                Learning Nexus is a dynamic platform designed to revolutionize{" "}
                <br />
                the way individuals engage with learning.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="scalable-data">
                  <div className="vector-align">
                    <div className="vectors">
                      <img src={vector3} alt="vector3" />
                    </div>
                  </div>

                  <strong>A scalable, reliable platform</strong>
                  <p>
                    Learning Nexus is a dynamic platform designed to
                    revolutionize with learning. It’s Nexus is a dynamic
                    platform designed to revolutionize with learning.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="scalable-data">
                  <div className="vector-align">
                    <div className="vectors">
                      <img src={vector2} alt="vector2" />
                    </div>
                  </div>
                  <strong>A scalable, reliable platform</strong>
                  <p>
                    Learning Nexus is a dynamic platform designed to
                    revolutionize with learning. It’s Nexus is a dynamic
                    platform designed to revolutionize with learning.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="scalable-data">
                  <div className="vector-align">
                    <div className="vectors">
                      <img src={vector1} alt="vector1" />
                    </div>
                  </div>
                  <strong>A scalable, reliable platform</strong>
                  <p>
                    Learning Nexus is a dynamic platform designed to
                    revolutionize with learning. It’s Nexus is a dynamic
                    platform designed to revolutionize with learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="more-infoo">
              <a href="#" className="btn-style colored-border">
                Learn more <GoArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="company-cards">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-12 mb-5">
              <div className="reliable-card">
                <strong>A scalable, reliable platform</strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
                <div className="company-logos">
                  <div className="row">
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo2} alt="Logo2" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo3} alt="Logo3" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo4} alt="Logo4" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo5} alt="Logo5" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo2} alt="Logo2" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo3} alt="Logo3" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo4} alt="Logo4" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo5} alt="Logo5" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo2} alt="Logo2" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo3} alt="Logo3" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo4} alt="Logo4" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo5} alt="Logo5" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                  </div>
                </div>

                <div className="both-buttons">
                  <a href="#" className="btn-style colored-border">
                    Find a service pattern
                    <IoMdArrowForward />
                  </a>
                  <a href="#" className=" btn-style blue">
                    Start free trial
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-5">
              <div className="reliable-card">
                <strong>A scalable, reliable platform</strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
                <div className="company-logos">
                  <div className="row">
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo2} alt="Logo2" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo3} alt="Logo3" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo4} alt="Logo4" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo5} alt="Logo5" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo2} alt="Logo2" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo3} alt="Logo3" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo4} alt="Logo4" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo5} alt="Logo5" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo2} alt="Logo2" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo3} alt="Logo3" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo4} alt="Logo4" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo5} alt="Logo5" />
                    </div>
                    <div className="col-4 mb-2">
                      <img src={CompanyLogo1} alt="Logo1" />
                    </div>
                  </div>
                </div>

                <div className="both-buttons">
                  <a href="#" className="btn-style colored-border">
                    Find a service pattern
                    <IoMdArrowForward />
                  </a>
                  <a href="#" className=" btn-style blue">
                    Start free trial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="empowerSection-2">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Empowering <span className="blue"> Education:</span> <br /> Our
              LMS Journey
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br />
              the way individuals engage with learning.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="scalable-data">
                <div className="vector-align">
                  <div className="vectors">
                    <span>1</span>
                  </div>
                </div>

                <strong>
                  A scalable, reliable <br /> platform
                </strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="scalable-data">
                <div className="vector-align">
                  <div className="vectors">
                    <span>2</span>
                  </div>
                </div>
                <strong>
                  A scalable, reliable <br /> platform
                </strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
              </div>
            </div>
            <div className=" col-lg-4 col-md-6 mb-4">
              <div className="scalable-data">
                <div className="vector-align">
                  <div className="vectors">
                    <span>3</span>
                  </div>
                </div>
                <strong>
                  A scalable, reliable <br /> platform
                </strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
              </div>
            </div>
          </div>
          <div className="people-stream">
            <img src={stream} alt="peoples" className="stream" />
          </div>
        </div>
      </section>
      <section className="global-features">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-5">
                <div className="discover-wrapper">
                  <strong>Ilmiya Cloud Platfrom</strong>
                  <h2 className="h2">
                    Our features you love. <br /> And even{" "}
                    <span className="pink">More to discover</span>
                  </h2>
                  <p>
                    Learning Nexus is a dynamic platform designed to
                    revolutionize the way individuals engage with learning.
                    Learning Nexus is a dynamic platform designed to
                    revolutionize the way individuals engage with learning.
                  </p>
                  <a href="#" className="btn-style colored-border">
                    view all our features
                  </a>
                </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-5">
                    <div className="glob-img">
                        <img src= {glob} alt="glob" />
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 mb-4">
                    <MotherCards/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <MotherCards/>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <MotherCards/>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Partners;
