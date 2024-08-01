import React from "react";
import lightbulb from "../assets/images/lightbulb.svg";
import cardBook from "../assets/images/cardBook.png";

import { IoMdOpen } from "react-icons/io";
const MotherCards = () => {
  return (
    <>
      <div className="Mother-card">
        <div className="icons">
          <img src={lightbulb} alt="bulb" />
        </div>
        <strong>Exploring Minimalis</strong>
        <div className="learn">
          <span>Learn more</span>
          <IoMdOpen />
        </div>
      </div>
    </>
  );
};

export const MotherCards2 = () => {
  return (
    <>
      <div className="Mother-schools-card">
        <strong>Exploring Minimalis Architecture: Less is More ever</strong>
        <p>Exploring Minimalis Architecture: Less is More ever</p>
        <div className="learn">
          <span>Learn more</span>
          <IoMdOpen />
        </div>
      </div>
    </>
  );
};


// MotherCard2 component without learn more

export const CardWithoutMore = () => {
  return (
    <div className="Mother-card">
      <div className="icons">
      <img src={lightbulb} alt="bulb" />
      </div>
      <strong>Exploring Minimalis</strong>
    </div>
  );
};

export default MotherCards;


// 

export const MotherpictureCard = () => {
  return (
    <div className="picture-card">
      <div className="card-image">
      <img src={cardBook} alt="cardBook" />
      </div>
      <div className="minimalist-info">
      <strong>Exploring Minimalist Architecture: Less is More</strong>
      <p className="para"> Learning Nexus is a dynamic platform designed to revolutionize the way individuals engage with learning.</p>
     <div className="more">
      <span>Get Started</span>
      <IoMdOpen />
     </div>
      </div>
    </div>
  );
};
