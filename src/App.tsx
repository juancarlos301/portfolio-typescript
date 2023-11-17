import { Global, css } from "@emotion/react";

import { Home } from "./pages";

const App = () => {
  const GlobalStyle = css`
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      font-weight: 600;
    }
  `;

  return (
    <>
      <Global styles={GlobalStyle} />
      <div>
        <Home />
      </div>
    </>
  );
};

export default App;
