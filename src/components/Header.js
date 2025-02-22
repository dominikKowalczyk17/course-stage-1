import React from "react";
import ReactImg from "../assets/react-core-concepts.png";

const reactDescriptions = ["Core", "Fundamental", "Essential"];

const genRandom = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = () => {
  const description = reactDescriptions[genRandom(2)];
  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
