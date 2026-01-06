import { ContainerProjects, Content, ChipComponent } from "./styles-projects";
import chatPicture from "../../assets/chat.jpeg";
import ecommerce from "../../assets/ecommerce.jpeg";
import movieflix from "../../assets/movieflix.png";
import solintesis from "../../assets/solintesis.jpeg";
import tannius from "../../assets/tannius.png";
import solintesisLocal from "../../assets/local-sol.jpeg";
import colnoPos from "../../assets/colno.jpeg";

export const Projects = () => {
  const projects= [
    {
      title: 'Colno-pos',
      tecnologies: ["React", 'Electron', "MUI", "CSS", 'nodejs', 'PostgreSQL', 'SQL SERVER'],
      image: colnoPos,
      description: `Development of a Point of Sale (POS) system designed for supermarkets and retail stores, enabling fast and intuitive invoicing operations.
The system integrates with Ofimatica system and provides a clean, user-friendly interface to simplify daily sales processes, cashier operations, and transaction management.`
    },

    {
      title: "Tannius App – Automated Workout Routine Platform",
      tecnologies: ["React", "MUI", "CSS", 'express', 'nodejs', 'Mongodb'],
      image: tannius,
      desription: `Development of an application that automatically generates workout routines based on the muscles selected by the user.
The platform allows users to create personalized training plans without manual configuration, adapting exercises and routines to specific muscle groups.
Designed to simplify and optimize fitness planning through an intuitive and automated training experience.`
    },
    {
      title: "Solintesis local app",
      tecnologies: ["Electron", "React", "MUI", "CSS", 'express', 'nodejs', 'PostgreSQL'],
      image: solintesisLocal,
      description: `Development of a local desktop application that extends the Solintesis web platform, enabling integration with third-party software to emit electronic invoices through DIAN.
The application acts as a bridge between external systems and Solintesis, allowing data mapping, custom variables, and seamless synchronization for compliant electronic invoicing.`
    },
    {
      title: "Solintesis – Electronic Invoicing Platform",
      tecnologies: ["React", "MUI", "CSS", 'express', 'nodejs', 'postgres', 'php'],
      image: solintesis,
      description: `Development of an integrated platform designed for businesses requiring electronic invoicing, with direct integration with DIAN for the issuance and validation of electronic documents.
It includes inventory management, product control, stock (kardex) tracking, and customer (third-party) administration.
The system was built as a technology service provider platform, enabling multiple companies to operate and comply with Colombia’s electronic invoicing regulations.`
    },
    {
      title: "MovieFlix",
      tecnologies: ["React", "Bootstrap", "CSS"],
      image: movieflix,
      description:
        "MovieFlix is a web application developed using React and CSS, leveraging the Movie Database (Movie DB) API. Users can seamlessly add their favorite movies, explore films through keyword-based searches, and filter movies based on popularity. The application features an infinite scroll for a seamless browsing experience, making it a comprehensive platform for movie enthusiasts.",
    },
    {
      title: "E-commerce",
      tecnologies: ["React", "Bootstrap", "Styled-components"],
      image: ecommerce,
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
      image: chatPicture,
      description:
        "The Chat application is developed using a tech stack that includes React, MUI (Material-UI), Styled-components, Node.js, Express, Sockets, and Postgres. This real-time communication platform resembles WhatsApp, allowing users to engage in conversations with friends, create new chat groups, and exchange emojis, voice notes, and messages. Leveraging socket technology, the application provides a seamless and interactive chatting experience.",
    },
  ];


  const Chip = (props: { label: string }) => {
    const { label } = props;
    return <ChipComponent>{label}</ChipComponent>;
  };

  return (
    <ContainerProjects>
      <h2>PROJECTS</h2>
      {projects.map((item, index) => (
        <div className="project-item" key={index}>
          <div className="img-container">
            <img src={item.image} alt="logo project" />
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
