import React from "react";
import { Form } from "react-bootstrap";
import Logo2 from "../assets/images/Logo2.png";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="features-section">
          <div className="footer-section">
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-5">
                  <Form>
                    <Form.Group
                      className="mb-4"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Sign up for the ilmiya </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email addresss"
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="col-md-3">
                  <div className="subscribe">
                    <a href="#" className="outline-button">
                      Subscribe
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-detail">
                    <p>
                      By submitting this form, you acknowledge and agree that
                      Ilmiya will process your information.
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-services">
                <div className="row">
                  <div className="col-md-4 col-12">
                    <div className="ilmiya-logo">
                      <img src={Logo2} alt="logo" />
                    </div>
                  </div>
                  <div className="col-md-2 col-6 p-4">
                    <div className="services-info">
                      <strong>Products</strong>
                      <ul>
                        <li>
                          <a href="#">Open ILM</a>
                        </li>
                        <li>
                          <a href="#">Education Cloud</a>
                        </li>
                        <li>
                          <a href="#">Learning Experience Platform</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2 col-6 p-4">
                    <div className="services-info">
                      <strong>Solutions</strong>
                      <ul>
                        <li>
                          <a href="#">Educators</a>
                        </li>
                        <li>
                          <a href="#">Schools</a>
                        </li>
                        <li>
                          <a href="#">Centers</a>
                        </li>
                        <li>
                          <a href="#">Families</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2 col-6 p-4">
                    <div className="services-info">
                      <strong>Company</strong>
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Blogs</a>
                        </li>
                        <li>
                          <a href="#">Partners</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2 col-6 p-4 ">
                    <div className="services-info">
                      <strong>Resources</strong>
                      <ul>
                        <li>
                          <a href="#">Guides</a>
                        </li>
                        <li>
                          <a href="#">Support</a>
                        </li>
                        <li>
                          <a href="#">Legal</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-security">
              <div className="row">
                <div
                  className="col-md-4 col-12 mb-3" >
                  <ul>
                    <li>
                      <a href="#">System Status</a>
                    </li>
                    <li>
                      <a href="#">Terms of use </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-12 mb-3">
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">support</a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 col-12">
                  <div className="social-icons">
                    <a href="#">
                      <MdOutlineFacebook />
                    </a>
                    <a href="#">
                      <FaXTwitter />
                    </a>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                    <a href="#">
                      <IoLogoInstagram />
                    </a>
                    <a href="#">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
