import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

import { MarginHome, About, Experience, Projects } from "../../components";
import myPicture from "../../assets/mypicture.jpeg";
import {
  HomeContainer,
  PersonalContent,
  ChangeContentContent,
} from "./styles-home";
export const Home = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <HomeContainer>
      <MarginHome isHovered={isHovered} />
      <div
        className="container-content"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <PersonalContent>
          <div className="personal">
            <h1>Juan Carlos Valencia</h1>
            <h2>Full Stack Developer</h2>
            <img src={myPicture} alt="my picture" />
            <div className="container-icons">
              <a
                href="https://github.com/juancarlos301"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-carlos-valencia-montoya-b81848236/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="mailto:juancarlos.31.2002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </PersonalContent>
        <ChangeContentContent>
          <About />
          <Experience />
          <Projects />
        </ChangeContentContent>
      </div>
    </HomeContainer>
  );
};
