import styled from "@emotion/styled";

export const ContainerMarginHome = styled.div`
  div.margin-container {
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    box-sizing: border-box;
    padding: 0 50px;

    div {
      height: 50%;
      width: 100%;
      svg defs linearGradient {
        & stop:nth-child(1) {
          stop-color: rgb(74, 57, 143);
        }
        & stop:nth-child(2) {
          stop-color: rgb(120, 152, 119);
        }
        & stop:nth-child(3) {
          stop-color: rgb(74, 57, 143);
        }
      }
    }
    & div:nth-child(2) {
      display: flex;
      justify-content: flex-start;
      transform: rotate(180deg);
    }
  }
  .margin-container.content-hovered div svg defs linearGradient {
    stop:nth-child(1) {
      stop-color: rgb(120, 152, 119);
    }
    stop:nth-child(2) {
      stop-color: rgb(74, 57, 143);
    }
    stop:nth-child(3) {
      stop-color: rgb(120, 152, 119);
    }
  }
`;
