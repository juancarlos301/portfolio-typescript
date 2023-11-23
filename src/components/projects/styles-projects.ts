import styled from "@emotion/styled";

export const ContainerProjects = styled.div`
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    margin-top: 0;
    color: #b3b3b1;
  }
  div.project-item {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #c9c9c9;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    gap: 15px;
    div.img-container {
      width: 40%;
      height: 100%;
      img {
        border-radius: 8px;
        width: 100%;
        height: 120px;
      }
    }
  }
  @media (max-width: 768px) {
    div.project-item {
      flex-direction: column;
      align-items: center;
      padding: 5px;
      div.img-container {
        width: 80%;
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 60%;
  p {
    color: rgb(148, 163, 184);
    font-size: 14px;
    line-height: 1.45;
  }
  h3 {
    color: #b3b3b1;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    width: 80%;
    h3,
    p {
      text-align: center;
    }
    div {
      justify-content: center;
    }
  }
`;

export const ChipComponent = styled.div`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  color: #000;
  background-color: #a05b94;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
