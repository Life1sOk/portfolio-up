import type { IFigure } from "../../types";

import { FigurContainer } from "./index.style";

const Figur = ({ datas }: { datas: IFigure }) => {
  const { type, height, width, radius } = datas;

  return <FigurContainer type={type} height={height} width={width} radius={radius} />;
};

export default Figur;
