import colIMage from "../../assets/col.png";
import USAIMage from "../../assets/uss.png";
import { LanguagesContainer } from "./styles-languages";
export const Languages = () => {
  return (
    <LanguagesContainer>
      <h2>LANGUAGES</h2>
      <div>
        <div>
          <img src={colIMage} alt="COL flag" />
          <p>C2</p>
        </div>
        <div>
          <img src={USAIMage} alt="USA flag" />
          <p>B2</p>
        </div>
      </div>
    </LanguagesContainer>
  );
};
