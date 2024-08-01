import React from "react";
import Header from "../components/Header";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdOpen } from "react-icons/io";
import MotherPlatform from "../components/MotherPlatform";
import Global from "../assets/images/Global.png";
import Counter from "../components/Counter";
import logo from "../assets/images/logo.png";
import float1 from "../assets/images/float1.png";
import float2 from "../assets/images/float2.png";
import float3 from "../assets/images/float3.png";
import lxpBlock from "../assets/images/lxpBlock.png";
import MotherCards, {
  CardWithoutMore,
  MotherpictureCard,
} from "../components/MotherCards";
import { FaCirclePlus } from "react-icons/fa6";
import map from "../assets/images/map.png";
import device1 from "../assets/images/device1.png";
import device2 from "../assets/images/device2.png";
import device3 from "../assets/images/device3.svg";
import bannerLarge from "../assets/images/bannerLarge.png";
import { RiArrowRightSLine } from "react-icons/ri";
import checkSquare from "../assets/images/checkSquare.svg";
import lineargraph from "../assets/images/lineargraph.png";
import Clip from "../assets/images/Clip.svg";
import points from "../assets/images/points.png";
import Footer from "../components/Footer";
import Accordians from "../components/Accordians";

const LXP = () => {
  return (
    <>
      <Header />
      <section className="LXP-system">
        <div className="container">
              <div className="section-title">
                <h2 className="h2">
                  <span className="pink-blue">Build With </span>The Power <br />{" "}
                  of Ilmiya Education Cloud
                </h2>
                <p>
                  Take the guesswork out of learning with built-in tools that{" "}
                  <br />
                  help you create, execute.
                </p>

                <div className="get-started">
                  <a href="#" className="btn-style colored-border">
                    Get Started
                  </a>

                  <a href="#" className="btn-style text">
                    Sign Up <RiArrowRightSLine />
                  </a>
                </div>
              </div>
        </div>
      
      </section>
      <section className="lxp-Help-Mother">
     
        <div className="container">
         
        <div className="lxp-blocks">
          <img src= {lxpBlock} alt="lxp" />
        </div>
          <div className="row">
            <div className="col-md-6 mb-5">
              <div className="Nature">
                <h2>
                  Help make Mother <br />{" "}
                  <span className="blue">Nature proud.</span>
                </h2>
                <p>
                  Learning Nexus is a dynamic platform <br />
                  designed to revolutionize
                </p>
                <div className="more">
                  <span>Learn more</span>
                  <IoMdOpen />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <div className="Nature">
                <h2>
                  Help make Mother <br />{" "}
                  <span className="blue">Nature proud.</span>
                </h2>
                <p>
                  Learning Nexus is a dynamic platform <br />
                  designed to revolutionize
                </p>
                <div className="more">
                  <span>Learn more</span>
                  <IoMdOpen />
                </div>
              </div>
            </div>
          </div>

       
        </div>

        <div className="container">
          <div className="mother-info">
            <h2 className="help-heading">
              Help make Mother <br />
              <span> Nature proud.</span>
            </h2>
            <p className="para">
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <MotherPlatform />
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <MotherPlatform />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherPlatform />
            </div>
          </div>
        </div>
      </section>
      <section className="build-future">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              {" "}
              Build for the future.
              <br /> <span className="blue">Available</span> today
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize the
              way individuals engage with learning. With a <br /> comprehensive
              array of interactive courses. Learning Nexus is a dynamic platform
              designed to revolutionize <br /> the way individuals engage with
              learning. With a comprehensive array of interactive courses.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6  mb-4">
              <div className="scalable-data">
                <strong>A scalable, reliable platform</strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <div className="scalable-data">
                <strong>A scalable, reliable platform</strong>
                <p>
                  Learning Nexus is a dynamic platform designed to revolutionize
                  with learning. It’s Nexus is a dynamic platform designed to
                  revolutionize with learning.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
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
          <div className="row">
            <div className="col-md-12">
              <div className="revolution">
                <img src={Global} alt="global" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="completion">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="completion-wrapper">
                <div className="completion-card">
                  <h2>
                    Lesson Completion <span>Award</span> {""}
                    system
                  </h2>
                  <p>Ilmiya Cloud Platfrom</p>
                  <div className="row">
                    <div className="col-6">
                      <Counter />
                    </div>
                    <div className="col-6">
                      <Counter />
                    </div>
                  </div>
                  <a href="#">
                    Learn more
                    <IoIosArrowForward />
                  </a>
                </div>
                <div className="shadowDashboard">
                  <img src={bannerLarge} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="completion-wrapper">
                <div className="completion-card">
                  <h2>
                    Lesson Completion <span>Award</span> {""}
                    system
                  </h2>
                  <p>Ilmiya Cloud Platfrom</p>
                  <div className="row">
                    <div className="col-6">
                      <Counter />
                    </div>
                    <div className="col-6">
                      <Counter />
                    </div>
                  </div>
                  <a href="#">
                    Learn more
                    <IoIosArrowForward />
                  </a>
                </div>
                <div className="shadowDashboard">
                  <img src={bannerLarge} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Nature-proud">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Help make Mother <br />{" "}
              <span className="blue">Nature proud.</span>
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherpictureCard />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherpictureCard />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherpictureCard />
            </div>
          </div>
        </div>
      </section>
      <section className="Discover-features">
        <div className="container"> 
          <div className="map-features">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="map-heading">
                  <h2>
                    Our features you love. <br /> And even{" "}
                    <span className="pink">More to discover</span>
                  </h2>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize the way individuals engage with learning.{" "}
                    <br /> With a comprehensive array of interactive courses.
                    Learning Nexus is a dynamic platform.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="map-img">
                  <img src={map} alt="map" />
                </div>
              </div>
            </div>
          </div>
          <div className="map-counter">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <Counter />
              </div>
              <div className="col-lg-3 col-md-6">
                <Counter />
              </div>
              <div className="col-lg-3 col-md-6">
                <Counter />
              </div>
              <div className="col-lg-3 col-md-6">
                <Counter />
              </div>
            </div>
          </div>
          <div className="dasboard-discover">
            <div className="row">
              <div className="col-md-12">
                <div className="map-heading">
                  <h2>
                    Our features you love. <br /> And even{" "}
                    <span className="pink">More to discover</span>
                  </h2>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize the way individuals engage with learning.{" "}
                    <br /> With a comprehensive array of interactive courses.
                    Learning Nexus is a dynamic platform.
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <img src={bannerLarge} alt="dashboard" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card-section">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Help make Mother <br />{" "}
              <span className="blue">Nature proud.</span>
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6  mb-4 ">
              <MotherCards />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherCards />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherCards />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherCards />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherCards />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <MotherCards />
            </div>
          </div>
        </div>
      </section>
      <section className="card-section section-2">
        <div className="container">
          <div className="2nd-mother-section">
            <div className="Nature-wrapper">
              <h2>
                Help make Mother <br />{" "}
                <span className="blue">Nature proud.</span>
              </h2>
              <p>
                Learning Nexus is a dynamic platform designed to revolutionize{" "}
                <br /> the way individuals engage with learning.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6  mb-4">
              <CardWithoutMore />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <CardWithoutMore />
            </div>
            <div className="col-lg-4 col-md-6  mb-4">
              <CardWithoutMore />
            </div>
            <div className="col-md-12">
              <div className="Mother-card large-card">
                <div className="icons">
                  <img src={checkSquare} alt="check" />
                </div>
                <h2>
                  Exploring Minimalis{" "}
                  <span className="pink-blue">Architecture:</span> <br /> Less
                  is More ever
                </h2>
                <div className="learn">
                  <span>Learn more</span>
                  <IoMdOpen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="empowering">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Empowering <span className="blue">Education:</span> <br />
              Our LMS Journey
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="devices">
            <div className="row">
              <div className="col-lg-4 col-md-6  mb-4">
                <div className="device-card">
                  <img src={device1} alt="device1" />
                  <strong>Device that protect student data.</strong>
                  <div className="add-svg">
                    <FaCirclePlus />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6  mb-4">
                <div className="device-card">
                  <img src={device2} alt="device2" />
                  <strong>Device that protect student data.</strong>
                  <div className="add-svg">
                    <FaCirclePlus />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6  mb-4">
                <div className="device-card">
                  <img src={device3} alt="device3" />
                  <strong>Device that protect student data.</strong>
                  <div className="add-svg">
                    <FaCirclePlus />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="empowering graph-section">
        <div className="container">
          <div className="multi-clip">
            <img src={Clip} alt="clip" />
          </div>
          <div className="Nature-wrapper">
            <h2>
              Empowering <span className="blue">Education:</span> <br />
              Our LMS Journey
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="linear-graph-img">
                <img src={lineargraph} alt="lineargraph" className="linear" />
                <img src={points} alt="points" className="dashboard-points" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid-discover">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Help make Mother <br />{" "}
              <span className="blue">Nature proud.</span>
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="Mother-card large-card">
                <div className="icons">
                  <img src={checkSquare} alt="check" />
                </div>
                <h2>
                  Exploring Minimalis{" "}
                  <span className="pink-blue">Architecture:</span> <br /> Less
                  is More ever
                </h2>
                <div className="learn">
                  <span>Learn more</span>
                  <IoMdOpen />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 ">
              <div className="col-md-12 mb-3">
                <MotherCards />
              </div>
              <div className="col-md-12 mb-3">
                <MotherCards />
              </div>
              <div className="col-md-12 mb-3">
                <MotherCards />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Floating-section">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Help make Mother <br />{" "}
              <span className="blue">Nature proud.</span>
            </h2>
            <p>
              Learning Nexus is a dynamic platform designed to revolutionize{" "}
              <br /> the way individuals engage with learning.
            </p>
          </div>
          <div className="floating-info">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 ">
                <div className="floating-card">
                  <div className="border-img">
                    <img src={float1} alt="float1" />
                  </div>
                  <strong>
                    Exploring Minimalist Architecture: Less is More
                  </strong>
                  <div className="date">
                    <span>April 20, 2025</span>
                    <img src={logo} alt="logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 ">
                <div className="floating-card">
                  <div className="border-img">
                    <img src={float2} alt="float2" className="float-img" />
                  </div>
                  <strong>
                    Exploring Minimalist Architecture: Less is More
                  </strong>
                  <div className="date">
                    <span>April 20, 2025</span>
                    <img src={logo} alt="logo" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 ">
                <div className="floating-card">
                  <div className="border-img">
                    <img src={float3} alt="float3" />
                  </div>
                  <strong>
                    Exploring Minimalist Architecture: Less is More
                  </strong>
                  <div className="date">
                    <span>April 20, 2025</span>
                    <img src={logo} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Accordians/>
      <section className="Unlock-section">
        <div className="container">
          <div className="Nature-wrapper">
            <h2>
              Unlock the power of <span className="blue">Ilmiya</span>
            </h2>
            <p>
              Choose the perfect plan for your needs and start your <br /> journey with Ilmiya today.
            </p>
          </div>
          <div className="get-started">
            <a href="#" className="btn-style colored-border">
              Get Started
            </a>

            <a href="#" className="btn-style text">
              Sign Up <RiArrowRightSLine />
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default LXP;
