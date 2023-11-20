import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  background-color: #1d1d20;
  width: 100%;
  height: 100%;
  .container-content {
    position: relative;
    margin: 0px 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const PersonalContent = styled.div`
  width: 40%;
  min-width: 40%;
  height: 100vh;
  div.personal {
    width: 40%;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    padding-top: 140px;
    box-sizing: border-box;
    margin-left: 70px;
    img {
      width: 150px;
      border-radius: 50%;
      margin: 40px 0;
    }
    div.container-icons {
      display: flex;
      gap: 20px;
      justify-content: center;
      a {
        text-decoration: none;
        cursor: pointer;
        svg {
          fill: gray;
          width: 25px;
          height: 25px;
        }
      }
      a:hover {
        svg {
          fill: #fff;
        }
      }
    }
  }
  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 3.5rem;
    text-align: center;
    margin: 0 30px 30px;
  }

  h2 {
    color: #fff;
    font-weight: 400;
    margin-top: 0;
  }

  @media (max-width: 1024px) {
    div.personal {
      padding-top: 100px;
    }
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    div.personal {
      padding-top: 0;
      position: relative;
      width: 100%;
      margin-left: 0;
      justify-content: center;
    }
    h1 {
      font-size: 2rem;
      text-align: center;
    }
    h2 {
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;

export const ChangeContentContent = styled.div`
  width: 60%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 140px;
  padding-bottom: 40px;
  box-sizing: border-box;
  gap: 70px;
  @media (max-width: 1024px) {
    padding-top: 100px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
