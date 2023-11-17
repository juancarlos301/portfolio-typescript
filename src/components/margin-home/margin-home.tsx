import { SvgLinear } from "./components";
import { ContainerMarginHome } from "./styles-margin-home";
type PropsMarginHomeType = {
  isHovered: boolean;
};

export const MarginHome = (props: PropsMarginHomeType) => {
  const { isHovered } = props;
  return (
    <ContainerMarginHome>
      <div className={`margin-container ${isHovered ? "content-hovered" : ""}`}>
        <div>
          <SvgLinear />
        </div>
        <div>
          <SvgLinear />
        </div>
      </div>
    </ContainerMarginHome>
  );
};
