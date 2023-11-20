import styled from "@emotion/styled";

export const ContainerMarginHome = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
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
          stop-color: #4e184a;
        }
        & stop:nth-child(2) {
          stop-color: #fff;
        }
        & stop:nth-child(3) {
          stop-color: #4e184a;
        }

        stop {
          transition: all 0.3s ease-in-out;
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
      stop-color: #fff;
    }
    stop:nth-child(2) {
      stop-color: #4e184a;
    }
    stop:nth-child(3) {
      stop-color: #fff;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    div.margin-container {
      padding: 0 20px;
    }
  }
  @media (max-width: 425px) {
    div.margin-container {
      padding: 0;
    }
  }
`;
