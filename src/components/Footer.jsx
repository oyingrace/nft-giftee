import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "",
      data: ["", "", ""],
    },
    {
      title: "",
      data: ["", "", ""],
    },
    {
      title: "",
      data: ["", ""],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Surprise your loved ones with Customized NFTs</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2024 giftify</span>
        
      </div>
    </footer>
  );
}
