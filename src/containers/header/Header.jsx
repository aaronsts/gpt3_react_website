import React from "react";
import "./header.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something <br /> amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui possimus
          asperiores iusto molestias magnam fugiat maxime consequatur commodi in
          incidunt natus laborum, cupiditate recusandae placeat magni veniam
          error atque repellat.
        </p>
        <div className="gpt3__header-content_input">
          <input type="email" placeholder="your email address" />
          <button>Get Started</button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people" />
          <p>1,600 people requested access in the last 24 hours.</p>
        </div>
      </div>
      <div className="gpt3__header-img">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
