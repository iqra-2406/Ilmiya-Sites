import React from "react";
import play from "../assets/images/play.png";
import videoImg from "../assets/images/videoImg.png";
const VideoComponent = () => {
  return (
    <>
      <div className="features-section">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col mb-5">
              <div className="video-features">
                <h2>Help make Mother
                  <br /> <span className="blue">Nature Proud.</span>
                   </h2>
                <p>Learning Nexus is a dynamic platform designed to revolutionize <br /> the way individuals engage with learning.</p>
                </div>
                <div className="video-element">
                  <img src={videoImg} alt="video" />
                    <div className="video-icon">
                        <img src={play} alt="play" />
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoComponent;
