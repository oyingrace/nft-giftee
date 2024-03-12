import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">Welcome to Personalized NFT Gifting Experience!</p>
          <h1 className="title">Unlock the Power of Digital Gifting with Unique NFTs</h1>
          <p className="description">
          Surprise your loved ones with Customized NFTs
          </p>
          
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
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