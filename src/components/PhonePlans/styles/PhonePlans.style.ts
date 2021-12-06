import { Card, Typography, Grid, Container } from "@material-ui/core";
import styled from "styled-components";
import { Metrics } from "../../../constants/metrics";
import { Colors } from "../../../constants/colors";
import PhonelinkIcon from "@mui/icons-material/Phonelink";

type ButtonCardProps = {
  $active: boolean;
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
  color: ${({ $active }) => ($active ? Colors.black : Colors.gray3)};
  &.MuiPaper-root {
    &:hover {
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
    color: ${Colors.gray};
    text-align: center;
  }
`;

export const PhonePlansGrid = styled(Grid)`
  margin-top: ${Metrics.xxlSpacing}px;
  padding-top: 20px;
`;

export const PhonePlansContainer = styled(Container)`
  &.MuiContainer-root {
    padding-top: 100px;
  }
`;

export const ListPhonePlansGrid = styled(Grid)`
  padding-top: 40px;
`;

export const PhoneIcon = styled(PhonelinkIcon)`
  &.MuiSvgIcon-root {
    font-size: 40px;
  }
`;

export const BoldText = styled(Typography)`
  &.MuiTypography-root {
    font-size: 26px;
    font-weight: bold;
  }
`;

export const GridDevice = styled(Grid)`
  padding-top: 10px;
`;

export const DeviceInfo = styled(Typography)`
  &.MuiTypography-root {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const DeviceInfoSmall = styled(Typography)`
  &.MuiTypography-root {
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
