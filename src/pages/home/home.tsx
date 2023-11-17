import { useState } from "react";
import { MarginHome, About, Experience } from "../../components";
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
          <h1>Juan Carlos Valencia</h1>
          <h2>Full Stack Developer</h2>
        </PersonalContent>
        <ChangeContentContent>
          <About />
          <Experience />
        </ChangeContentContent>
      </div>
    </HomeContainer>
  );
};
