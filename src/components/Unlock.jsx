import React from "react";
import { Form } from "react-bootstrap";
import { MdOutlineDrafts } from "react-icons/md";

const Unlock = () => {
  return (
    <>
      <div className="privacy">
        <div className="container">
          <div className="row">
            <div className=" col-lg-6 col-md-5 col-12">
              <h3>
                Unlock the power of <span> Ilmiya </span>
                <p className="para">
                  Choose the perfect plan for your needs and start your journey
                  with Ilmiya today.
                </p>
              </h3>
            </div>
            <div className=" col-lg-6 col-md-7 col-12">
              <div className="email-subscribe-container">
                <Form>
                  <Form.Group className="Email-address" controlId="exampleForm.ControlInput1">
                    <div className="input-wrapper">
                      <MdOutlineDrafts className="draft-icon" />
                      <Form.Control type="email" placeholder="Enter your email address" />
                      <a href="#" className="fill-button">Subscribe</a>
                    </div>
                  </Form.Group>
                </Form>
              </div>
              <div className="policy">
              <span>We care about your data in our <a href="#">privacy policy.</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unlock;
