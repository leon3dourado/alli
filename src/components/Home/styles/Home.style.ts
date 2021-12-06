import React from "react";
import { Card, Typography, Grid, Container } from "@material-ui/core";
import styled from "styled-components";

import { Metrics } from "../../../constants/metrics";
import { Colors } from "../../../constants/colors";

type ButtonCardProps = {
  $active: boolean;
};

const handleColor = ($optionSelected: string | undefined) => {
  switch ($optionSelected) {
    case "TBT01":
      return Colors.blue1;
    case "CPT02":
      return Colors.yellow2;
    case "WF03":
      return Colors.secondary;
    default:
      return Colors.gray5;
  }
};

export const ButtonCard = styled(Card)<ButtonCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: ${Metrics.xxlSpacing}px;
  padding-bottom: ${Metrics.xxlSpacing}px;
  border-radius: ${Metrics.standardSpacing}px;
  cursor: pointer;
  height: 200px;
  &.MuiPaper-root {
    color: ${Colors.gray3};
    &:hover {
      color: ${({ $active }) => ($active ? Colors.black : Colors.gray3)};
      background: ${({ $active }) => ($active ? Colors.gray8 : Colors.white)};
    }
  }
  &.MuiSvgIcon-root {
    font-size: 40px;
  }
`;

export const Title = styled(Typography)`
  &.MuiTypography-h3 {
    font-weight: bold;
    color: ${Colors.gray};
    text-align: center;
  }
`;

export const Subtitle = styled(Typography)`
  &.MuiTypography-h5 {
    margin-top: ${Metrics.bitSmallSpacing};
    color: ${Colors.gray};
    text-align: center;
    padding-bottom: 30px;
  }
  &.MuiTypography-root {
    padding-bottom: 30px;
  }
`;

export const DescriptionText = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
  }
`;

export const RegularText = styled(Typography)`
  &.MuiTypography-root {
    font-size: 10px;
  }
`;

export const BoldText = styled(Typography)`
  &.MuiTypography-root {
    font-size: 18px;
    font-weight: bold;
    padding-top: 10px;
  }
`;

export const HomeGrid = styled(Grid)`
  margin-top: ${Metrics.xxlSpacing},
	padding-right: ${Metrics.xxlSpacing * 3},
	padding-left: ${Metrics.xxlSpacing * 3},
	'@media(max-width: 1100px)': {
		paddingRight: ${Metrics.xxlSpacing * 2},
		paddingLeft: ${Metrics.xxlSpacing * 2},
	}
`;

export const IconContainer = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  border-radius: 32px;
  padding: 10px;
  color: ${({ $active }) => ($active ? Colors.white : Colors.gray3)};
  background-color: ${({ $active, $optionSelected }) =>
    $active ? handleColor($optionSelected) : Colors.gray6};
  &.MuiSvgIcon-root {
    font-size: 40px;
  }
`;

export const CardGrid = styled(Grid)`
  &.MuiGrid-root {
    padding-top: 40px;
  }
`;

export const HomeContainer = styled(Container)`
  &.MuiContainer-root {
    padding-top: 100px;
  }
`;
