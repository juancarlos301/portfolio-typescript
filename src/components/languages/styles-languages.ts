import styled from "@emotion/styled";

export const LanguagesContainer = styled.div`
  width: 80%;
  h2 {
    margin-top: 0;
    color: #b3b3b1;
    text-align: start;
    width: 100%;
  }
  div {
    display: flex;
    gap: 20px;
    padding-left: 15px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: #b3b3b1;
        margin-top: 0;
      }
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
  @media (max-width: 425px) {
    width: 100%;
    div {
      flex-direction: column;
      align-items: center;
      padding-left: 0;
    }
  }
`;
