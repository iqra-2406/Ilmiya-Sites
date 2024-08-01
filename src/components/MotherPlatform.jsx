import React from "react";
import tick from "../assets/images/tick.svg";
import { IoIosArrowForward } from "react-icons/io";
import lightbulb from "../assets/images/lightbulb.svg";
import { RiArrowRightSLine } from "react-icons/ri";

// Learning Component
const MotherPlatform = () => {
  return (
    <>



      <div className="learning-info">
        <h3>Learning</h3>
        <p className="para">
          For individuals or very small teams just getting started with Ilmiya.
        </p>
        <ul>
          <li>
            <img src={tick} alt="tick" />
            <span>Import any git repo</span>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <span>Deploy in seconds</span>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <span>Automatic CI/CD</span>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <span>Serverless Compute</span>
          </li>
        </ul>
        <div className="get-started">
          <a href="#" className="btn-style colored-border">
            Get Started
          </a>

          <a href="#" className="btn-style text">
            Sign Up <RiArrowRightSLine />
          </a>
        </div>
      </div>


    </>
  );
};

export default MotherPlatform;
