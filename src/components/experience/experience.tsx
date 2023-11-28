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

  const dunamix_technologies = [
    "React",
    "Javascript",
    "styled-components",
    "Node",
    "Postgresql",
    "Sequelize",
    "Express",
    "MUI",
  ];

  const Freelance_technologies = ["React", "Javascript", "CSS"];

  return (
    <ContainerExperience>
      <h2>EXPERIENCE</h2>
      <div className="experience-item">
        <div className="date">JUN 2023 - Currently</div>
        <Content>
          <h3>Metanoia Innovation</h3>
          <p>
            As a Full Stack Developer in my current role, I played a key role in
            developing an innovative CRM system. Focused on addressing specific
            client needs, I excelled in creating an intuitive user interface on
            the frontend. Additionally, I contributed to the backend to ensure
            optimal system performance and security, actively participating in
            all project phases to achieve outstanding results.
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
      <div className="experience-item">
        <div className="date">DEC 2021 - JUN 2023</div>
        <Content>
          <h3>Dunamix</h3>
          <p>
            I contributed to the creation of an order management platform,
            standing out for my involvement in the successful integration with
            various suppliers and transportation services. This included
            significant collaborations with Coordinadora and Dropi in multiple
            countries.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              width: "100%",
            }}
          >
            {dunamix_technologies.map((item, index) => (
              <Chip label={item} key={index} />
            ))}
          </div>
        </Content>
      </div>
      <div className="experience-item">
        <div className="date">JUN 2021 - DEC 2021</div>
        <Content>
          <h3>Freelance</h3>
          <p>
            My main responsibility involved the implementation of efficient
            interfaces and the successful integration of business logic. This
            approach ensured smooth functioning of the platform.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              width: "100%",
            }}
          >
            {Freelance_technologies.map((item, index) => (
              <Chip label={item} key={index} />
            ))}
          </div>
        </Content>
      </div>
    </ContainerExperience>
  );
};
