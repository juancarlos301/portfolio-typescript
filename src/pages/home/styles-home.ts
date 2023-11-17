import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  background-color: #1d1d20;
  position: relative;
  width: 100%;
  height: 100vh;
  .container-content {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 140px);
    height: calc(100% - 40px);
    margin: 20px 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PersonalContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: sticky;
  padding-top: 100px;
  box-sizing: border-box;

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
`;

export const ChangeContentContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 100px;
  box-sizing: border-box;
  gap: 50px;
`;
