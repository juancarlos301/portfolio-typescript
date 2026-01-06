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
    "Angular",
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
    "Angular",
  ];

  const Freelance_technologies = ["React", "Javascript", "CSS"];

  const BeautyPlus_technologies = [
    "Angular",
    "React",
    "Javascript",
    "CSS",
    "Node",
    "Postgresql",
    "Express",
    "MongoDB",
    "Typescript",
    "Socket.io",
    "HTML",
  ];

  const data = [
    {
      date: "Jun 2025 - Currently",
      company: "Technical leader at Beauty Plus SAS",
      description: "As the technical lead for the ERP project, my main role is to create new modules for the automation of processes within the company, such as human resource management, general or cyclical inventory management modules, reports, and improvements to existing modules. In addition, I restructure critical processes within the application, as it was experiencing performance problems in both reporting and real-time operations.",
      technologies: BeautyPlus_technologies,
    },
    {
      date: "Feb 2024 - Jun 2025",
      company: "Beauty Plus SAS",
      description: `Within the company, I work as a Full Stack Developer,
where my focus is maintaining the ERP app that manages the company,
analyzing and developing different functionalities that improve operations. Among the most notable is the implementation
of a TMS system that manages routes and orders carried by the company's
internal and external carriers, as well as managing
these orders for tracking by the accounting department. My responsibilities also include
bug resolution, ensuring high performance, and understanding
the needs of the company and its management to generate value and
growth.`,
      technologies: BeautyPlus_technologies,
    },
    {
      date: "JUN 2023 - Dic 2023",
      company: "Metanoia Innovation",
      description:
        "As a Full Stack Developer in my current role, I played a key role in developing an innovative CRM system. Focused on addressing specific client needs, I excelled in creating an intuitive user interface on the frontend. Additionally, I contributed to the backend to ensure optimal system performance and security, actively participating in all project phases to achieve outstanding results.",
      technologies: metanoia_technologies,
    },
    {
      date: "Jan 2022 - JUN 2023",
      company: "Dunamix",
      description:
        "I contributed to the creation of an order management platform, standing out for my involvement in the successful integration with various suppliers and transportation services. This included significant collaborations with Coordinadora and Dropi in multiple countries.",
      technologies: dunamix_technologies,
    },
    {
      date: "JUN 2021 - DEC 2021",
      company: "Freelance",
      description:
        "My main responsibility involved the implementation of efficient interfaces and the successful integration of business logic. This approach ensured smooth functioning of the platform.",
      technologies: Freelance_technologies,
    },
  ];

  return (
    <ContainerExperience>
      <h2>EXPERIENCE</h2>
      {data.map((item, index) => (
        <div className="experience-item" key={index}>
          <div className="date">{item.date}</div>
          <Content>
            <h3>{item.company}</h3>
            <p>{item.description}</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                width: "100%",
              }}
            >
              {item.technologies.map((item, index) => (
                <Chip label={item} key={index} />
              ))}
            </div>
          </Content>
        </div>
      ))}
    </ContainerExperience>
  );
};
