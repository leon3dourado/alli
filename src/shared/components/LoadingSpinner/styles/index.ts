import { CircularProgress, Grid } from "@material-ui/core";
import styled from "styled-components";

export const LoadingSpinner = styled(CircularProgress)`
  &.MuiGrid-root {
    padding-top: 40px;
  }
`;
export const GridLoadingSpinner = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
`;
