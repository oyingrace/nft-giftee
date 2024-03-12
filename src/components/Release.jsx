import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases" id="features">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Customize your NFT with personal messages, images, and themes</h2>
          <p className="description">
          Send one-of-a-kind digital gifts that stand out from the crowd
          </p>

          <p className="description">
            
          </p>
          <p className="description"></p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a> 

        </div>
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Choose from a variety of templates or create your own design</h2>
          <p className="description">
          Add a touch of creativity and sentiment to your gift-giving experience
          </p>
          <p className="description">
           
          </p>
          <p className="description"></p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
