import { Grid } from "@material-ui/core";
import * as S from "../BackButton/style/BackButton.style";

export const BackButton = () => {
  return (
    <Grid item xs={12}>
      <S.BackButtonIcon onClick={() => window.history.back()}>
        <S.BackIcon />
      </S.BackButtonIcon>
    </Grid>
  );
};
