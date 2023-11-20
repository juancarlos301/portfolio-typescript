import styled from "@emotion/styled";

export const ContainerExperience = styled.div`
  width: 80%;
  h2 {
    margin-top: 0;
    color: #b3b3b1;
  }
  div.experience-item {
    width: 100%;
    border-radius: 8px;
    border: 2px solid #c9c9c9;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    gap: 15px;
    div.date {
      width: 20%;
      height: 100%;
      color: #c9c9c991;
      font-size: 12px;
      font-weight: 600;
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    div.experience-item {
      flex-direction: column;
      align-items: center;
      div.date {
        width: 80%;
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 80%;
  p {
    color: rgb(148, 163, 184);
    font-size: 14px;
    line-height: 1.45;
  }
  h3 {
    color: #b3b3b1;
    margin-top: 0;
  }
`;

export const ChipComponent = styled.div`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  color: #000;
  background-color: #a05b94;
`;
