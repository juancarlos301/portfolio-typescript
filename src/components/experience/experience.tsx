import {
  ContainerExperience,
  ChipComponent,
  Content,
} from "./styles-experience";

export const Experience = () => {
  const Chip = (props: { label: string }) => {
    const { label } = props;
    return <ChipComponent>{label}</ChipComponent>;
  };

  const metanoia_technologies = [
    "React",
    "Javascript",
    "TypesCript",
    "styled-components",
    "Node",
    "Postgresql",
    "Sequelize",
    "Express",
    "Sockets",
  ];

  return (
    <ContainerExperience>
      <h2>EXPERIENCE</h2>
      <div className="experience-item">
        <div className="date">DEC 2022 - DEC 2023</div>
        <Content>
          <h3>Metanoia Innovation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            blanditiis deserunt soluta facilis praesentium dolore ullam, sed
            quae explicabo voluptatibus quos pariatur numquam unde tempore
            libero, omnis minima. Beatae, cumque.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              width: "100%",
            }}
          >
            {metanoia_technologies.map((item, index) => (
              <Chip label={item} key={index} />
            ))}
          </div>
        </Content>
      </div>
    </ContainerExperience>
  );
};
