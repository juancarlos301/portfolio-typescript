import { ContainerProjects, Content, ChipComponent } from "./styles-projects";
import chatPicture from "../../assets/chat.jpeg";

export const Projects = () => {
  const projects: {
    title: string;
    description: string;
    tecnologies: string[];
  }[] = [
    {
      title: "MovieFlix",
      tecnologies: ["React", "Bootstrap", "CSS"],
      description:
        "Lorem ipsum dolor sit, m alias, eveniet sequi molestiae magni nihil odit co",
    },
    {
      title: "Ecommerce",
      tecnologies: ["React", "Bootstrap", "Styled-components"],
      description:
        "Lorem ipsum dolor sit, m alias, eveniet sequi molestiae magni nihil odit co",
    },
    {
      title: "CHAT",
      tecnologies: [
        "React",
        "MUI",
        "Styled-components",
        "Nodejs",
        "Express",
        "Sockets",
        "Postgres",
      ],
      description:
        "Lorem ipsum dolor sit, m alias, eveniet sequi molestiae magni nihil odit co",
    },
  ];

  const images: string[] = ["", "", chatPicture];

  const Chip = (props: { label: string }) => {
    const { label } = props;
    return <ChipComponent>{label}</ChipComponent>;
  };

  return (
    <ContainerProjects>
      <h2> PERSONAL PROJECTS</h2>
      {projects.map((item, index) => (
        <div className="project-item" key={index}>
          <div className="img-container">
            <img src={images[index]} alt="logo project" />
          </div>
          <Content>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                width: "100%",
              }}
            >
              {item.tecnologies.map((item, index) => (
                <Chip label={item} key={index} />
              ))}
            </div>
          </Content>
        </div>
      ))}
    </ContainerProjects>
  );
};
