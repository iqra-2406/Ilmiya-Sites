import React from "react";
import profile2 from "../assets/images/profile2.svg";

const ChatBox = () => {
  return (
    <>
      <div className="container py-5">
        <div className="msg-blocks">
          <div className="row">
            <div className="col-md-12">
              <div className="chat-box sender">
                <img src={profile2} alt="profile" className="profile" />
                <div className="chat">
                  <p>
                    Exploring Minimalist Architecture: Less is More Learning
                    Nexus is a dynamic platform designed to revolutionize the
                    way individuals engage with learning.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="chat-box receiver">
                <div className="chat">
                  <p>
                    Exploring Minimalist Architecture: Less is More Learning
                    Nexus is a dynamic platform designed to revolutionize the
                    way individuals engage with learning. Exploring Minimalist
                    Architecture: Less is More Learning Nexus is a dynamic
                    platform designed.
                  </p>
                </div>
                <img src={profile2} alt="profile" className="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
