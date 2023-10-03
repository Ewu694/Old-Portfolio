import React from 'react';
import "../styles/Home.css";

export const Home = () => {
  return(
    <div className="home">
      <div className="about">
        <h2>Hey! My Name is Eric </h2>
        <h3>ʕ•́ᴥ•̀ʔっ</h3>
        <div className ="prompt"> 
          <p> I'm a computer science student with a passion for learning and creating. I also enjoy singing and would love to connect with you. Hope to meet you soon! </p>
          
          <p> Feel free to email me a message or contact me through the social media provided in my footers :)</p> 
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React, NPM,
              BootStrap, MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, C#</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

