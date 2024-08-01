import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Dashboard4 from "../assets/images/Dashboard4.png";
import Dashboard3 from "../assets/images/Dashboard3.png";
import { RiArrowRightSLine } from "react-icons/ri";
import MotherCards, { MotherCards2 } from "../components/MotherCards";
import Avg1 from "../assets/images/Avg1.png";
import Avg2 from "../assets/images/Avg2.png";
import Avg3 from "../assets/images/Avg3.png";
import Avg4 from "../assets/images/Avg4.png";
import Avg5 from "../assets/images/Avg5.png";
import zigZag from "../assets/images/zigZag.svg";
import star from "../assets/images/star.png";
import saturn from "../assets/images/saturn.png";
import startUp from "../assets/images/startUp.png";
import target from "../assets/images/target.png";
import fallingStar from "../assets/images/fallingStar.svg";
import multiArrow from "../assets/images/multiArrow.svg";
import IndexPage from "../assets/images/IndexPage.png";
import bannerchart from "../assets/images/bannerchart.png";
import clouds from "../assets/images/clouds.svg";
import calendar from "../assets/images/calendar.png";
import stream from "../assets/images/stream.png";
import stream1 from "../assets/images/stream1.png";
import logIn from "../assets/images/login.png";
import Accordians from "../components/Accordians";
import CompanyLogo1 from "../assets/images/CompanyLogo1.png";
import CompanyLogo2 from "../assets/images/CompanyLogo2.png";
import CompanyLogo3 from "../assets/images/CompanyLogo3.png";
import CompanyLogo4 from "../assets/images/CompanyLogo4.png";
import lightbulb from "../assets/images/lightbulb.svg";

const Schools = () => {
  return (
    <>
      <Header />
      <section className="schools-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 mb-5">
              <div className="cloud-wrapper">
                <h2 className="h2">
                  {" "}
                  <span className="pink">Build with</span> The Education Cloud
                </h2>
                <p>
                  Take the guesswork out of learning with built-in tools that
                  help you create, execute.
                </p>
              </div>
              <div className="get-started justify-content-start ">
                <a href="#" className="btn-style colored-border">
                  Get Started
                </a>

                <a href="#" className="btn-style text">
                  Sign Up <RiArrowRightSLine />
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 mb-5">
              <div className="double-dashboard">
                <img src={Dashboard4} alt="dashboard" />
                <img src={Dashboard4} alt="dashboard" className="upper-d" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="school-mother-section">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Help make Mother <span className="blue">Nature proud.</span>
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="row">
            <div className=" col-lg-6 col-md-12 mb-4">
              <MotherCards2 />
            </div>
            <div className=" col-lg-6 col-md-12 mb-4">
              <MotherCards2 />
            </div>
            <div className=" col-lg-6 col-md-12 mb-4">
              <MotherCards2 />
            </div>
            <div className=" col-lg-6 col-md-12 mb-4">
              <MotherCards2 />
            </div>
            <div className=" col-lg-6 col-md-12 mb-4">
              <MotherCards2 />
            </div>
            <div className=" col-lg-6 col-md-12 mb-4">
              <MotherCards2 />
            </div>
          </div>
        </div>
      </section>
      <section className="schools-cloud-platfom">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-12">
              <div className="index-imgs">
                <img src={Avg1} alt="avg1" className="avg1" />
                <img
                  src={IndexPage}
                  alt="indindexex-page"
                  className="index-page"
                />
                <img src={Avg2} alt="avg2" className="avg2" />
                <img src={multiArrow} alt="multiArrow" className="multiArrow" />
              </div>
            </div>
            <div className=" col-lg-6 col-md-12">
            <div className="discover-wrapper">
                <strong>Ilmiya Cloud Platfrom</strong>
                <h2 className="h2">
                  Our features you love. And even{" "}
                  <span className="pink">More to discover</span>
                </h2>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  the way individuals engage with learning. Learning Nexus is a
                  dynamic platform designed to revolutionize the way individuals
                  engage with learning.
                </p>
                <a href="#" className="btn-style colored-border">
                  view all our features
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="schools-cloud-platfom opposite">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-12">
                <div className="discover-wrapper">
                  <strong>Ilmiya Cloud Platfrom</strong>
                  <h2 className="h2">
                    Our features you love. And even{" "}
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
              <div className=" col-lg-6 col-md-12">
                <div className="chart-imgs">
                <img src={multiArrow} alt="multiArrow" className="multiArrow" />
                  <img src={Avg1} alt="avg1" className="opposite-1" />
                  <img src={bannerchart} alt="chart" className="index-chart" />
                  <img src={Avg2} alt="avg2" className="opposite-2" />
                  <img src={clouds} alt="cloud" className="clouds" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Mixture-clouds">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-12">
              <div className="calender-charts">
                <img src={calendar} alt="calendar" className="calendar" />
                <img src={clouds} alt="cloud" className="clouds" />
              </div>
            </div>
            <div className=" col-lg-6 col-md-12">
              <div className="discover-wrapper">
                <strong>Ilmiya Cloud Platfrom</strong>
                <img src={clouds} alt="cloud" className="clouds" />
                <h2 className="h2">
                  Our features you love. And even{" "}
                  <span className="pink">More to discover</span>
                </h2>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  the way individuals engage with learning. Learning Nexus is a
                  dynamic platform designed to revolutionize the way individuals
                  engage with learning.
                </p>
                <a href="#" className="btn-style colored-border">
                  view all our features
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mixture-1">
          <div className="container py-5">
            <div className="row">
              <div className=" col-lg-6 col-md-12">
                <div className="discover-wrapper">
                  <strong>Ilmiya Cloud Platfrom</strong>
                  <h2 className="h2">
                    Our features you love. <br />
                    And even <span className="pink">More to discover</span>
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
              <div className=" col-lg-6 col-md-12">
                <div className="chart-imgs">
                <img src={zigZag} alt="line" className="zigzag" />
                  <img src={Dashboard4} alt="dashboard" className="dashboard" />
                  <img src={clouds} alt="cloud" className="clouds" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mixture-2">
          <div className="container">
            <div className="row">
              <div className=" col-lg-6 col-md-12">
                <div className="chart-imgs">
                  <img src= {fallingStar} alt="falling" className="falling-star" />
                  <img src={Dashboard4} alt="dashboard" className="dashboard" />
                  <img src= {star} alt="star" className="star" />
                  <img src= {target} alt="target" className="target" />
                </div>
              </div>
              <div className=" col-lg-6 col-md-12">
                <div className="discover-wrapper">
                  <strong>Ilmiya Cloud Platfrom</strong>
                  <h2 className="h2">
                    Our features you love. <br />
                    And even <span className="pink">More to discover</span>
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
            </div>
          </div>
        </div>

        <div className="mixture-3">
          <div className="container">
            <div className="discover-wrapper">
              <strong>Ilmiya Cloud Platfrom</strong>
              <h2 className="h2">
                Our features you love. <br />
                And even <span className="pink">More to discover</span>
              </h2>
              <a href="#" className="btn-style colored-border">
                view all our features
              </a>
            </div>
            <div className="peoples">
              <div className="row">
                <div className="col-md-12">
                  <div className="chart-imgs">
                  <img src= {star} alt="star" className="star1" />
                  <img src= {star} alt="star" className="star2" />
                  <img src= {fallingStar} alt="falling" className="falling-star" />
                  <img src= {star} alt="star" className="star3" />
                  <img src= {target} alt="target" className="target" />
                    <img src={stream} alt="peoples" className="people-stream" />
                    <img src= {saturn} alt="saturn" className="saturn" />
                    <img src= {startUp} alt="startUp" className="startUp" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nature-clouds">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Help make Mother <span className="blue">Nature proud.</span>
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12 mb-5">
              <div className="chart-imgs">
                <img src={stream1} alt="peoples" className="people-stream1" />
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <MotherCards />
            </div>
            <div className="col-md-4 mb-4">
              <MotherCards />
            </div>
            <div className="col-md-4 mb-4">
              <MotherCards />
            </div>
          </div>
        </div>
        <div className="logIn-container">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="discover-wrapper">
                  <strong>Ilmiya Cloud Platfrom</strong>
                  <h2 className="h2">
                    Our features you love. <br />
                    And even <span className="pink">More to discover</span>
                  </h2>
                  <p>
                    Learning Nexus is a dynamic platform designed to
                    revolutionize <br />
                    the way individuals engage with learning. Learning Nexus is
                    a <br /> dynamic platform designed to revolutionize the way
                    individuals engage with learning.
                  </p>
                  <a href="#" className="btn-style colored-border">
                    view all our features
                  </a>
                </div>
              </div>
              <div className="col-md-12">
                <div className="logIn-page">
                  <img src={logIn} alt="login" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordians />
      <section className="grow">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="Nature-wrapper">
                <h2>
                  Help make Mother <span className="blue">Nature proud.</span>
                </h2>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize{" "}
                  <br /> the way individuals engage with learning.
                </p>
                <a href="#" className="btn-style colored-border">
                  Apply for student
                </a>
              </div>
              <div className="companies">
                <p>Helping to grow the next generation of 5000+ companies</p>
                <div className="company-logos">
                  <img src={CompanyLogo1} alt="Logo1" />
                  <img src={CompanyLogo2} alt="Logo2" />
                  <img src={CompanyLogo3} alt="Logo3" />
                  <img src={CompanyLogo4} alt="Logo4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid-cards">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-12">
              <div className="discover-wrapper">
                <strong>Ilmiya Cloud Platfrom</strong>
                <h2 className="h2">
                  Our features you love. And even{" "}
                  <span className="pink">More to discover</span>
                </h2>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  the way individuals engage with learning. Learning Nexus is a
                  dynamic platform designed to revolutionize the way individuals
                  engage with learning.
                </p>
                <a href="#" className="btn-style colored-border">
                  view all our features
                </a>
              </div>
            </div>
            <div className=" col-lg-6 col-md-12">
              <div className="col-md-12 mb-4">
                <div className="self-card">
                  <div className="exploring-icon">
                    <img src={lightbulb} alt="lightbulb" />
                  </div>
                  <div className="exploring-info">
                    <strong>Exploring Minimalis Architecture A scalable, reliable platform</strong>
                    <p>Learning Nexus is a dynamic platform designed to revolutionize  with learning. 
                      It’s Nexus is a dynamic platform designed to revolutionize  with learning.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="self-card">
                  <div className="exploring-icon">
                    <img src={lightbulb} alt="lightbulb" />
                  </div>
                  <div className="exploring-info">
                    <strong>Exploring Minimalis Architecture A scalable, reliable platform</strong>
                    <p>Learning Nexus is a dynamic platform designed to revolutionize  with learning. 
                      It’s Nexus is a dynamic platform designed to revolutionize  with learning.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 mb-4">
                <div className="self-card">
                  <div className="exploring-icon">
                    <img src={lightbulb} alt="lightbulb" />
                  </div>
                  <div className="exploring-info">
                    <strong>Exploring Minimalis Architecture A scalable, reliable platform</strong>
                    <p>Learning Nexus is a dynamic platform designed to revolutionize  with learning. 
                      It’s Nexus is a dynamic platform designed to revolutionize  with learning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Last-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cloud-wrapper">
                <h2 className="h2">
                  {" "}
                  <span className="pink">Build with</span> The Power <br /> of Ilmiya Education Cloud
                </h2>
                <p>
                  Take the guesswork out of learning with built-in tools that
                  help you create, execute.
                </p>
                <a href="#" className="btn-style colored-border">
                  Get Started
                </a>

                <a href="#" className="btn-style text">
                  Sign Up <RiArrowRightSLine />
                </a>
              </div>
         
            </div>
            <div className="col-md-12">
              <div className="dashboard-imgs">
                <img src={Dashboard3} alt="dashboard" className="dashboard-3"/>
                <img src={Avg3} alt="avg3" className="avg3" />
                <img src={Avg4} alt="avg4" className="avg4" />
                <img src={Avg5} alt="avg5" className="avg5" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Schools;
