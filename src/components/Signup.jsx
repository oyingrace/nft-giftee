import React from "react";
import signup from "../assets/signup.png";
export default function Signup() {
  return (
    <div className="signup" id="how">
      <div className="container">
        <div className="content">
          <p className="sub-title"></p>
          <h1 className="title">Discover the simple steps to send a personalized NFT gift</h1>
          <p className="description">
          <p className="sub-title"></p> Browse our collection of unique NFT designs:
           Select the perfect NFT that resonates with the recipient's taste and personality.
          </p>


          <p className="description">
          <p className="sub-title">Send Your Gift: </p>Once satisfied with your customized NFT, proceed to send it to your intended recipient.
          </p>
          
          <p className="description">
          <p className="sub-title">Recipient Redemption:</p>The recipient will receive a notification of their gifted NFT 
          . They can easily redeem their personalized NFT and add it to their digital collection.
          </p>
         
        </div>
        
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
