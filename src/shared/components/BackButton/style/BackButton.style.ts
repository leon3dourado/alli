import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@material-ui/core";
import { Colors } from "../../../../constants/colors";

export const BackButtonIcon = styled(IconButton)`
  width: 40px;
  height: 40px;

  &.MuiButtonBase-root {
    background-color: ${Colors.gray7};
    :hover {
      background-color: ${Colors.gray5};
    }
  }
`;
export const BackIcon = styled(ArrowBackIcon)`
  &.MuiSvgIcon-root {
    font-size: 30px;
  }
`;
