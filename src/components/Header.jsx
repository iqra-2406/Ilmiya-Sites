import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import { GrMenu } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const handleMenuShow = () => {
    setMenuState(true);
  };
  const hideMenuHandler = () => {
    setMenuState(false);
  };
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="header-elements">
            <div className="row">
              <div className="col-lg-2 col-md-12">
                <div className="nav-items">
                  <div className="header-logo">
                    <img src={logo} alt="logo" />
                  </div>

                  <div className="menu">
                    {menuState ? (
                      <a href="#" onClick={hideMenuHandler}>
                        <RxCross2 />
                      </a>
                    ) : (
                      <a href="#" onClick={handleMenuShow}>
                        <GrMenu />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className={`menu-div ${menuState ? "active" : ""}`}>
                  <ul>
                  <li>
                      <a href="/">Education</a>
                    </li>
                    <li>
                      <a href="lxp">Ilmiya Lxp</a>
                    </li>
                    <li>
                      <a href="openIlm">OpenIlm</a>
                    </li>

                    <li>
                      <a href="school">Schools</a>
                    </li>
                    <li>
                      <a href="partners">LMS Journey</a>
                    </li>

                    <li>
                      <a href="roi">Clouds</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col- md-12">
                <div className={`button-div ${menuState ? "active" : ""}`}>
                  <Button variant="primary">Get Started</Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;