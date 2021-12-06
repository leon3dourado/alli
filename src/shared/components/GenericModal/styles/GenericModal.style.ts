import styled from "styled-components";
import { Metrics } from "../../../../constants/metrics";
import { Colors } from "../../../../constants/colors";
import { Typography, Grid, Button, Box, Paper, Dialog } from "@material-ui/core";
import {
  Check,
  Close,
  ExitToApp,
  SaveOutlined,
  Warning,
  Announcement
} from "@material-ui/icons";

export const Announce = styled(Announcement)`
  font-size: ${Metrics.xxlSpacing}px;
  color: ${Colors.white};
  border-radius: ${Metrics.xlSpacing * 2}px;
  padding: ${Metrics.standardSpacing}px;
  background-color: ${Colors.orange};
`;

export const ButtonGrid = styled(Grid)`
  font-size: ${Metrics.xxlSpacing}px;
  color: ${Colors.white};
  border-radius: ${Metrics.xlSpacing * 2}px;
  padding: ${Metrics.standardSpacing}px;
`;

export const ConfirmButton = styled(Button)`
  &.MuiButtonBase-root {
    box-sizing: border-box;
    font-weight: bold;
    color: ${Colors.gray};
    padding-top: ${Metrics.largeSpacing}px;
    padding-bottom: ${Metrics.largeSpacing}px;
    font-size: 14px;
    border-radius: 40px;
    height: 60px;
    width: 250px;
    background: ${Colors.white};
    :hover {
      background: ${Colors.white};
      color: ${Colors.gray};
    }
  }
`;

export const CancelButton = styled(Button)`
  box-sizing: border-box;
  font-weight: bold;
  font-size: ${Metrics.standardSpacing}px;
  color: ${Colors.gray2};
  padding-top: ${Metrics.largeSpacing}px;
  padding-bottom: ${Metrics.largeSpacing}px;
`;

export const Subtitle = styled(Typography)`
  &.MuiTypography-root {
    color: ${Colors.gray2};
    font-weight: 500px;
    text-align: center;
    margin-top: ${Metrics.tinySpacing}px;
    margin-bottom: ${Metrics.xlSpacing * 2}px;
    font-size: ${Metrics.standardSpacing}px;
  }
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    color: ${Colors.gray};
    font-weight: bold;
    text-align: center;
    margin-top: ${Metrics.xlSpacing}px;
    font-size: ${Metrics.largeSpacing}px;
  }
`;

export const BoxIcon = styled(Box)`
  align-self: center;
  margin-top: ${Metrics.xlSpacing * 2}px;
`;

export const ModalPaper = styled(Paper)`
  background: ${Colors.white};
  padding-right: ${Metrics.xlSpacing}px;
  padding-left: ${Metrics.xlSpacing}px;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 350px;
`;

export const ModalDialog = styled(Dialog)`
  padding-right: ${Metrics.xlSpacing}px;
  padding-left: ${Metrics.xlSpacing}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  &.MuiPaper-elevation1 {
    box-shadow: none;
  }
`;

export const IconSave = styled(SaveOutlined)`
  font-size: 70px;
  color: ${Colors.white};
  border-radius: ${Metrics.xlSpacing * 2}px;
  padding: ${Metrics.bitSmallSpacing}px;
  background: ${Colors.yellow};
`;

export const IconExit = styled(ExitToApp)`
  font-size: 70px;
  color: ${Colors.white};
  border-radius: ${Metrics.xlSpacing * 2}px;
  padding: ${Metrics.bitSmallSpacing}px;
  background: ${Colors.primary};
`;

export const IconWarning = styled(Warning)`
  font-size: 70px;
  color: ${Colors.white};
  border-radius: ${Metrics.xlSpacing * 2}px;
  padding: ${Metrics.bitSmallSpacing}px;
  background: ${Colors.yellow};
`;

export const IconClose = styled(Close)`
  font-size: 70px;
  color: ${Colors.white};
  border-radius: ${Metrics.xlSpacing * 2}px;
  padding: ${Metrics.bitSmallSpacing}px;
  background: ${Colors.yellow};
`;

export const IconCheck = styled(Check)`
  &.MuiSvgIcon-root {
    font-size: 70px;
    color: ${Colors.white};
    border-radius: ${Metrics.xlSpacing * 2}px;
    padding: ${Metrics.bitSmallSpacing}px;
    background: ${Colors.secondary};
  }
`;
