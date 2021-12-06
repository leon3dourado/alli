import { Typography, Grid, Button, Container } from "@material-ui/core";
import styled from "styled-components";
import { Metrics } from "../../../constants/metrics";
import { Colors } from "../../../constants/colors";

export const Title = styled(Typography)`
  &.MuiTypography-h3 {
    font-weight: bold;
    color: ${Colors.gray};
    text-align: center;
  }
`;

export const Subtitle = styled(Typography)`
  &.MuiTypography-h5 {
    margin-top: ${Metrics.bitSmallSpacing}px;
    color: ${Colors.gray};
    text-align: center;
  }
`;
export const HomeGrid = styled(Grid)`
  margin-top: ${Metrics.xxlSpacing},
	padding-right: ${Metrics.xxlSpacing * 3}px,
	padding-left: ${Metrics.xxlSpacing * 3}px,
	'@media(max-width: 1100px)': {
		padding-right: ${Metrics.xxlSpacing * 2}px,
		padding-left: ${Metrics.xxlSpacing * 2}px,
	}
`;

export const FormGrid = styled(Grid)`
  &.MuiGrid-root {
    padding-top: 60px;
  }
`;

export const FormContainer = styled(Grid)`
  &.MuiGrid-root{
    display: flex;
    align-items: center;
    justify-content: center;
  }
    margin-top: ${Metrics.xxlSpacing}px,
    padding-right: ${Metrics.xxlSpacing * 3}px,
    padding-left: ${Metrics.xxlSpacing * 3}px,
    display: flex,
    align-items: center,
    justify-content: center,

  '@media(max-width: 1100px)': {
    padding-right: ${Metrics.xxlSpacing * 2}px,
    padding-left: ${Metrics.xxlSpacing * 2}px,
  }
`;

export const ButtonSubmitContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  padding-top: 10px;
`;

export const ButtonSubmit = styled(Button)`
  &.MuiButton-root {
    width: 240px;
    height: 56px;
    border-radius: 56px;
    color: ${Colors.white};
    background-color: ${Colors.secondary};
  }
`;

export const MainContainer = styled(Container)`
  padding-top: 100px;
`;
