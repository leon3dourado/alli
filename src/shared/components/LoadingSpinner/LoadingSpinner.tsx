import * as S from "./styles";
import { Typography } from "@material-ui/core";

export const LoadingSpinner = () => {
  return (
    <S.GridLoadingSpinner>
      <S.LoadingSpinner size={30} />
      <Typography>Carregando...</Typography>
    </S.GridLoadingSpinner>
  );
};
