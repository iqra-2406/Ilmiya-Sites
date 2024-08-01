import React from "react";
import Header from "../components/Header";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import { IoArrowForward } from "react-icons/io5";
import child from "../assets/images/child.png";
import yellowPolygon from "../assets/images/YellowPolygon.png";
import orange from "../assets/images/orange.png";
import gradient from "../assets/images/gradient.svg";
import VideoComponent from "../components/VideoComponent";
import Vector from "../assets/images/Vector.png";
import graphs from "../assets/images/graphs.png";
import Dashboard from "../assets/images/Dashboard.png";
import seegreen from "../assets/images/seegreen.svg";
import landingPoint from "../assets/images/landingPoint.png";
import landingGraph from "../assets/images/landingGraph.png";

import profile from "../assets/images/profile.svg";
import profile2 from "../assets/images/profile2.svg";
import SilverTrophy from "../assets/images/SilverTrophy.svg";
import grayMedal from "../assets/images/grayMedal.png";
import Bronze from "../assets/images/Bronze.png";
import medal from "../assets/images/medal.png";
import Clip from "../assets/images/Clip.svg";
import Group from "../assets/images/Group.svg";
import points from "../assets/images/points.png";
import gradient2 from "../assets/images/gradient2.png";
import halfGradient from "../assets/images/halfGradient.png";
import bannerchart from "../assets/images/bannerchart.png";
import bannerPoints from "../assets/images/bannerPoints.png";
import bannerLarge from "../assets/images/bannerLarge.png";

const LandingScreen = () => {
  return (
    <>
      <Header />
      <section className="student-layout">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="student-features">
                <h2 className="red-heading">
                  Our features you love. And even <span>More to discover</span>
                </h2>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  the way individuals engage with learning. With a comprehensive
                  array of interactive courses. Learning Nexus is a dynamic
                  platform designed to revolutionize the way individuals engage
                  with learning.
                </p>

                <div className="both-button mt-3">
                  <div className="row">
                    <div className="col-md-12">
                      <a href="#" className=" btn-style fill">
                        Login in as a student
                        <IoArrowForward />
                      </a>
                    </div>
                    <div className="col-md-6 col-10 mb-4">
                      <a href="#" className="btn-style colored-border outline">
                        For Schools
                        <IoArrowForward />
                      </a>
                    </div>
                    <div className="col-md-6 col-10 mb-4">
                      <a href="#" className="btn-style colored-border outline">
                        For application partners
                        <IoArrowForward />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="back-gradient">
                  <img src={gradient2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="gradient-imgs">
                <div className="all-imgs">
                  <img
                    src={gradient}
                    alt="gradient-poly"
                    className="gradient-poly"
                  />
                  <img
                    src={yellowPolygon}
                    alt="yellow"
                    className="yellow-poly"
                  />
                  <img src={child} alt="child" className="child" />
                  <img src={orange} alt="orange" className="orange-poly" />
                  <img src={halfGradient} alt="" className="half-gradient" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoComponent />
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="dashboard-features">
                <h2 className="red-heading">
                  Our features you love. 
                  And even <span>More to discover</span>
                </h2>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  the way individuals engage with learning. With a comprehensive
                  array of interactive courses. Learning Nexus is a dynamic
                  platform designed to revolutionize the way individuals engage
                  with learning.
                </p>
                <a href="#" className="btn-style blue-gradient">
                  Login in as a student
                  <IoArrowForward />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dashboard-imgs">
                <img src={seegreen} alt="polygon" className="img-2" />
                <div className="img-3">
                  <img src={bannerchart} alt="graphs" />
                </div>
                <div className="img-4">
                  <img src={bannerLarge} alt="banner large" />
                </div>
                <div className="img-5">
                  <img src={bannerPoints} alt="points" />
                </div>
                <img src={Vector} alt="vector" className="img-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Counter-page">
        <div className="container mt-5">
          <div className="counters">
            <div className="row">
              <div className="col-md-4 mb-5">
                <Counter />
              </div>
              <div className="col-md-4 mb-5">
                <Counter />
              </div>
              <div className="col-md-4 mb-5">
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="floating-box">
        <div className="container mt-5">
          <div className="People-features">
            <div className="row">
              <div className="col-md-12">
                <h2 className="red-heading">
                  Our features you love And even <br />
                  <span>More to discover</span>
                </h2>
              </div>
            </div>
            <div className="row py-5">
              <div className="col-md-12">
                <div className="floating-images">
                  <img src={profile} alt="profile" className="profile" />
                  <img src={bannerchart} alt="graph" className="graph" />
                  <img
                    src={bannerPoints}
                    alt="points"
                    className="Score point"
                  />
                  <img src={profile2} alt="profile" className="profile2" />
                  <div className="icon-imgs bronze">
                    <img src={Bronze} alt="Bronze" />
                  </div>
                  <div className="icon-imgs clip">
                    <img src={Clip} alt="clip" />
                  </div>
                  <div className="icon-imgs silver">
                    <img src={SilverTrophy} alt="SilverTrophy" />
                  </div>
                  <div className="icon-imgs medal">
                    <img src={medal} alt="medal" />
                  </div>
                  <div className="icon-imgs gray-icon">
                    <img src={grayMedal} alt="gray" />
                  </div>
                  <div className="icon-imgs group">
                    <img src={Group} alt="Group" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="peoples">
                  <h3>For Teachers</h3>
                  <p>
                    Learning Nexus is a dynamic <br /> platform designed to.
                  </p>
                  <a href="#" className="btn-style blue-gradient">
                    Sign up for free
                    <IoArrowForward />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="peoples">
                  <h3>For Learners</h3>
                  <p>
                    Learning Nexus is a dynamic <br /> platform designed to.
                  </p>
                  <a href="#" className="btn-style colored-border">
                    Get Started
                    <IoArrowForward />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="peoples">
                  <h3>For Parents</h3>
                  <p>
                    Learning Nexus is a dynamic <br /> platform designed to.
                  </p>
                  <a href="#" className="btn-style colored-border">
                    Register <IoArrowForward />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="future-div">
                <h2>Build for the future.</h2>
                <h2> Available today.</h2>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  the way <br /> individuals engage with learning..
                </p>
                <a href="#" className="btn-style blue-gradient">
                  Login as a student <IoArrowForward />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LandingScreen;
