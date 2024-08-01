import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Unlock from "../components/Unlock";
import { IoIosArrowForward } from "react-icons/io";
import courses from "../assets/images/courses.png";
import logo from "../assets/images/logo.png";
import lessons from "../assets/images/lessons.png";
import filter from "../assets/images/filter.svg";
import book1 from "../assets/images/book1.png";
import book2 from "../assets/images/book2.png";
import book3 from "../assets/images/book3.png";
import book4 from "../assets/images/book4.png";
import book5 from "../assets/images/book5.png";
import book6 from "../assets/images/book6.png";
import blank from "../assets/images/blank.png";
import { MdOutlineFileDownload } from "react-icons/md";
import info from "../assets/images/info.svg";
import Clip from "../assets/images/Clip.svg";
import calendar from "../assets/images/calendar.png";
import silver from "../assets/images/silver.svg";
import map from "../assets/images/map.png";
import vector1 from "../assets/images/vector1.svg";
import vector2 from "../assets/images/vector2.svg";
import vector3 from "../assets/images/vector3.svg";
import { IoMdOpen } from "react-icons/io";
import MotherPlatform from "../components/MotherPlatform";
import MotherCards, { CardWithoutMore } from "../components/MotherCards";
import { RiArrowRightSLine } from "react-icons/ri";

const OpenIlm = () => {
  return (
    <>
      <Header />
      <section className="Education-system">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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
              <div className="courses-img">
                <img src={courses} alt="courses" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Award-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="Lessons">
                <div className="both">
                  <img src={logo} alt="mini-logo" />
                  <span>Ilmiya Cloud Platfrom</span>
                </div>
                <h2>
                  <span>Lesson </span>Completion <br /> Awards system
                </h2>
                <p className="para">
                  Learning Nexus is a dynamic platform designed to revolutionize{" "}
                  <br /> the way individuals engage with learning.
                </p>
              </div>
              <div className="lesson-img">
                <img src={lessons} alt="lesson-img" />
              </div>
              <div className="lesson-info">
                <strong>A scalable, reliable platform</strong>
                <p>
                  Phasellus augue nisi, cursus vitae risus nec, auctor euismod
                  massa. Curabitur sed quam eu sapien consequat tincidunt in vel
                  augue. Duis hendrerit diam et commodo ultrices. Quisque
                  consequat euismod tempus. Phasellus efficitur accumsan felis a
                  viverra. In turpis metus, scelerisque vel ornare eu, malesuada
                  in ante. Duis lacus nisi, aliquam viverra elit volutpat,
                  venenatis sodales libero. Quisque elementum iaculis nibh, eget
                  sollicitudin mauris auctor at. Ut sagittis orci risus, ut
                  rhoncus justo blandit vel. Donec gravida vitae neque vitae
                  hendrerit. Mauris consectetur vel libero ac porta. Curabitur
                  interdum tellus in viverra finibus. Aliquam ut dolor eget
                  neque volutpat interdum eu et nunc. Mauris tortor nisi ,
                  tristique in elit vitae, vulputate aliquam enim. Pellentesque
                  sodales congue ex. Morbi eget pharetra ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="book-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="Lessons">
                <h2>
                  <span className="blue">Lesson </span>
                  {""}
                  Completion <br /> Awards system
                </h2>
                <p className="para">
                  Learning Nexus is a dynamic platform designed to revolutionize{" "}
                  <br /> the way individuals engage with learning.
                </p>
              </div>
              <div className="search-field">
                <div className="search">
                  <input
                    type="search"
                    className="form-control rounded search-input"
                    placeholder="Filter books"
                    aria-label="Search"
                  />
                  <img src={filter} alt="filter" className="search-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="books">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book1} alt="book" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book2} alt="book2" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book3} alt="book3" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book4} alt="book4" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book5} alt="book5" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book6} alt="book6" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book2} alt="book2" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={blank} alt="book" />
                  </div>
                  <div className="book-info">
                    <h3>New book</h3>
                    <div className="social">
                      <p>526 MB</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={blank} alt="book" />
                  </div>
                  <div className="book-info">
                    <h3>New book</h3>
                    <div className="social">
                      <p>526 MB</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={blank} alt="book" />
                  </div>
                  <div className="book-info">
                    <h3>New book</h3>
                    <div className="social">
                      <p>526 MB</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book5} alt="book5" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-6 mb-3">
                <div className="book-card">
                  <div className="book-img">
                    <img src={info} alt="info" className="info-icon" />
                    <img src={book6} alt="book6" />
                  </div>
                  <div className="book-info">
                    <h3>Tafseer Ahsan-ul-Ba...</h3>
                    <div className="social">
                      <p>Taha Publications</p>
                      <MdOutlineFileDownload />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-section  section-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-12">
              <div className="Lessons">
                <div className="both">
                  <img src={logo} alt="mini-logo" />
                  <span>Ilmiya Cloud Platfrom</span>
                </div>
                <h2>
                  <span>Lesson </span>Completion <br /> Awards system
                </h2>
                <p className="para">
                  Learning Nexus is a dynamic platform designed to revolutionize
                  the way individuals engage with learning. With a comprehensive
                  array of interactive courses. Learning Nexus is a dynamic
                  platform designed to revolutionize the way individuals engage
                  with learning. With a comprehensive array of interactive
                  courses..
                </p>

                <a href="#">
                  {" "}
                  Learn more
                  <IoIosArrowForward />
                </a>
              </div>
            </div>
            <div className=" col-lg-5 col-md-6 col-12">
              <div className="back-polygon">
                <div className="imgs">
                  <div className="clip">
                    <img src={Clip} alt="clip" />
                  </div>
                  <div className="calendar">
                    <img src={calendar} alt="calendr" />
                  </div>
                  <div className="silver">
                    <img src={silver} alt="silver" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LMS Journey */}

      <section className="LMS">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Ilmiya Cloud Platfrom</p>
              <h2>
                Our features you love. <br /> And even{" "}
                <span>More to discover</span>
              </h2>
              <p className="para">
                Learning Nexus is a dynamic platform designed to revolutionize
                the way individuals engage with learning. With a <br />{" "}
                comprehensive array of interactive courses. Learning Nexus is a
                dynamic platform.
              </p>
              <div className="map-img">
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
        </div>

        <div className="LMS-journey">
          <div className="container">
                <div className="Nature-wrapper">
                  <h2>
                    Empowering <span className="blue">Education:</span>
                    <br />
                    Our LMS Journey
                  </h2>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize <br />
                    the way individuals engage with learning.
                  </p>
                </div>
           
            <div className="row">
              <div className=" col-lg-3 col-md-6 col-12 mb-4">
                <div className="platform-card">
                  <div className="vectors">
                    <img src={vector1} alt="vector1" />
                  </div>
                  <strong>A scalable, reliable platform</strong>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize with learning. It’s Nexus is a dynamic
                    platform designed to revolutionize with learning.
                  </p>
                  <div className="more">
                    <span>Learn more</span>
                    <IoMdOpen />
                  </div>
                </div>
              </div>

              <div className=" col-lg-3 col-md-6 col-12 mb-4">
                <div className="platform-card">
                  <div className="vectors">
                    <img src={vector3} alt="vector3" />
                  </div>
                  <strong>A scalable, reliable platform</strong>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize with learning. It’s Nexus is a dynamic
                    platform designed to revolutionize with learning.
                  </p>
                  <div className="more">
                    <span>Learn more</span>
                    <IoMdOpen />
                  </div>
                </div>
              </div>
              <div className=" col-lg-3 col-md-6 col-12 mb-4">
                <div className="platform-card">
                  <div className="vectors">
                    <img src={vector2} alt="vector2" />
                  </div>
                  <strong>A scalable, reliable platform</strong>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize with learning. It’s Nexus is a dynamic
                    platform designed to revolutionize with learning.
                  </p>
                  <div className="more">
                    <span>Learn more</span>
                    <IoMdOpen />
                  </div>
                </div>
              </div>
              <div className=" col-lg-3 col-md-6 col-12 mb-4">
                <div className="platform-card">
                  <div className="vectors">
                    <img src={vector1} alt="vector1" />
                  </div>
                  <strong>A scalable, reliable platform</strong>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize with learning. It’s Nexus is a dynamic
                    platform designed to revolutionize with learning.
                  </p>
                  <div className="more">
                    <span>Learn more</span>
                    <IoMdOpen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="Mother-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mother-info">
                  <h2>
                    Help make Mother
                    <span> Nature proud.</span>
                  </h2>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize <br /> the way individuals engage with
                    learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 col-12">
                <MotherCards />
              </div>

              <div className="col-lg-4 col-md-6 mb-4 col-12">
                <MotherCards />
              </div>

              <div className="col-lg-4 col-md-6 mb-4 col-12">
                <MotherCards />
              </div>

              <div className="col-lg-4 col-md-6 mb-4 col-12">
                <MotherCards />
              </div>

              <div className="col-lg-4 col-md-6 mb-4 col-12">
                <MotherCards />
              </div>

              <div className="col-lg-4 col-md-6 mb-4 col-12">
                <MotherCards />
              </div>
            </div>
          </div>
        </section>

        <section className="Mother-section nature-proud">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mother">
                  <h2>
                    Help make Mother {""}
                    <span className="blue"> Nature proud.</span>
                  </h2>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize <br />
                    the way individuals engage with learning.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <MotherPlatform />
                  </div>
                  <div className="col-md-6 mb-4">
                    <MotherPlatform />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Mother-section gridd">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="mother">
                  <h2>
                    Empowering <span className="blue"> Education:</span> <br />
                    Our LMS Journey Help make Mother
                  </h2>
                  <p className="para">
                    Learning Nexus is a dynamic platform designed to
                    revolutionize <br /> the way individuals engage with
                    learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-8 mb-4 col-12">
                <MotherCards />
              </div>

              <div className="col-lg-4 col-md-4 mb-4 col-12">
                <MotherCards />
              </div>

              <div className="col-lg-4 col-md-4 mb-4 col-12">
                <CardWithoutMore />
              </div>

              <div className="col-lg-4 col-md-4 mb-4 col-12">
                <CardWithoutMore />
              </div>

              <div className="col-lg-4 col-md-4 mb-4 col-12">
                <CardWithoutMore />
              </div>

              <div className="col-lg-4 col-md-4 mb-4 col-12">
                <MotherCards />
              </div>
              <div className="col-lg-8 col-md-8 mb-4 col-12">
                <MotherCards />
              </div>
            </div>
          </div>
        </section>
      </section>
      <Unlock />
      <Footer />
    </>
  );
};

export default OpenIlm;
