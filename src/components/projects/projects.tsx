import { ContainerProjects, Content, ChipComponent } from "./styles-projects";
import chatPicture from "../../assets/chat.jpeg";
import ecommerce from "../../assets/ecommerce.jpeg";
import movieflix from "../../assets/movieflix.png";

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
        "MovieFlix is a web application developed using React and CSS, leveraging the Movie Database (Movie DB) API. Users can seamlessly add their favorite movies, explore films through keyword-based searches, and filter movies based on popularity. The application features an infinite scroll for a seamless browsing experience, making it a comprehensive platform for movie enthusiasts.",
    },
    {
      title: "E-commerce",
      tecnologies: ["React", "Bootstrap", "Styled-components"],
      description:
        "The E-commerce project is built using React, Bootstrap, and Styled-components, creating a dynamic application for online shopping. Users can explore detailed product information, seamlessly add items to their shopping cart with the desired quantity, and enjoy features such as login, sign-up, and a purchase history log.",
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
        "The Chat application is developed using a tech stack that includes React, MUI (Material-UI), Styled-components, Node.js, Express, Sockets, and Postgres. This real-time communication platform resembles WhatsApp, allowing users to engage in conversations with friends, create new chat groups, and exchange emojis, voice notes, and messages. Leveraging socket technology, the application provides a seamless and interactive chatting experience.",
    },
  ];

  const images: string[] = [movieflix, ecommerce, chatPicture];

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
