import { useEffect, useRef, useState } from "react";
import "../styles/AboutMe.css";

export default function AboutMe() {
  //   const slideRef = useRef(null);
  //   const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const slider = slideRef.current;
  //     const icons = slider.children;
  //     const iconWidth = icons[0].offsetWidth + parseFloat(getComputedStyle(slider).gap)
  //     const totalIcons = icons.length;

  //   })

  return (
    <div className="about-container">
      <h2>Some words about me</h2>
      <p>
        I'm a budding web developer with hands-on experience in HTML, CSS,
        JavaScript, React, Node.js, Express, Git, and Redux. While I wouldn't
        consider myself an expert, I am confident in my ability to create
        functional and visually appealing web applications. I have created
        projects both Front End and a small API using Node.js, Express, etc. As
        you will see in the projects below, showing my ability to combine
        front-end and back-end skills effectively. I'm constantly learning and
        perfectioning my skills as I love the challenge of problem-solving until
        I get it right and bringing ideas to life through code.
      </p>
      <p>
        <div className="slider-container">
          <div className="slider">
            <img
              className="slider-icon js"
              src="../../public/icons/js-icon.png"
              alt="javascripticon"
            />
            <img
              className="slider-icon"
              src="../../public/icons/react-icon.png"
              alt="react icon"
            />
            <img
              className="slider-icon"
              src="../../public/icons/html-icon.png"
              alt="html icon"
            />
            <img
              className="slider-icon"
              src="../../public/icons/css-icon.png"
              alt="css icon"
            />
            <img
              className="slider-icon"
              src="../../public/icons/redux-icon.png"
              alt="redux icon"
            />
            <img
              className="slider-icon"
              src="../../public/icons/express-icon.png"
              alt="express icon"
            />
            <img
              className="slider-icon"
              src="../../public/icons/nodejs-icon.png"
              alt="nodejs icon"
            />
            <img
              className="slider-icon"
              src="../../public/icons/git-icon.png"
              alt="git icon"
            />
            <img
              className="slider-icon"
              src="../../public/icons/github-icon.png"
              alt="github icon"
            />
          </div>
        </div>
        <span className="big-letter">W</span>hen I'm not coding, I enjoy running
        to clear my head, gaming for fun and strategy, and immersing myself in
        the world of music and movies to relax. I'm also an audiobook enthusiast
        because they allow me to enjoy stories and learn new things while
        staying active or preparing my next favorite meal. These hobbies reflect
        my love of multitasking, creativity and balance in life, which is also
        reflected in my approach to work and problem solving.
      </p>

      <a className="transparent-button cv-button" role="button" href="">
        Download CV
      </a>
    </div>
  );
}
