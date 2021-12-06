import {
  OutlinedInput,
  Select as SelectMaterialUi,
  TextField,
  TextFieldProps
} from "@material-ui/core";
import InputMask from "react-input-mask";
import Select from "react-select";
import styled from "styled-components";
import { Metrics } from "../../../../constants/metrics";
import { Colors } from "../../../../constants/colors";

type Props = {
  size?: number;
};

type InputCustomizadoProps = {
  $activeBorder?: boolean;
  $activeError?: boolean;
  $marginBottomDesactived?: boolean;
} & TextFieldProps;

type StyledMaskInputProps = {
  $activeError?: boolean;
};

type StyledInputProps = {
  $activeError?: boolean;
};

export const Label = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 0;
  padding-bottom: 20px;
  padding-top: 30px;
  color: ${Colors.gray};
`;

export const StyledMaskInput = styled(InputMask)<StyledMaskInputProps>`
  height: 56px;
  border-color: ${Colors.gray6};
  border-radius: ${Metrics.tinySpacing}px;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  border: ${({ $activeError }) =>
    $activeError ? `1px solid ${Colors.red2}` : `1px solid ${Colors.gray6}`};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${Colors.gray};
  padding-left: 12px;

  :focus {
    outline: none;
    border-color: ${Colors.secondary};
  }
`;

export const StyledInput = styled.input<StyledInputProps>`
  height: 56px;
  border-color: ${Colors.gray6};
  border-radius: ${Metrics.tinySpacing}px;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  border: ${({ $activeError }) =>
    $activeError ? `1px solid ${Colors.red2}` : `1px solid ${Colors.gray6}`};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${Colors.gray};

  :focus {
    outline: none;
    border-color: ${Colors.secondary};
  }

  padding-left: 12px;
`;

export const StyledSelect = styled(Select)`
  border-radius: 5px;
  font-size: 18px;
  width: 103%;
  min-height: 56px;

  .css-1jzc4in-control {
    min-height: 56px;
  }
`;

export const InputWithLabel = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ size }) => (size ? `width: ${size}%;` : `width: 100%;`)};
`;

export const StyledTextArea = styled.textarea`
  min-width: 95%;
  max-width: 95%;
  min-height: 120px;
  max-height: 120px;
  border: 1px solid ${Colors.gray6};
  border-radius: ${Metrics.tinySpacing}px;
  padding: 10px;
  margin: 10px calc(5%-10px);
  color: ${Colors.gray};
  font-size: ${Metrics.standardSpacing - 2}px;
  font-weight: 400;

  :active {
    border: 1px solid ${Colors.gray6};
  }

  :focus {
    outline: none;
    border: 1px solid ${Colors.secondary};
  }
`;

export const SelectMaterial = styled(SelectMaterialUi)`
  width: 100%;
  &.MuiOutlinedInput-root {
    min-height: 64px;
    max-height: 64px;
    background-color: ${Colors.white};
    border-radius: ${Metrics.tinySpacing}px;
    & fieldset {
      border: none;
    }
    &:hover fieldset {
      border-color: ${Colors.secondary};
    }
    &.Mui-focused fieldset {
      border-color: ${Colors.secondary};
    }
  }
  & .MuiSelect-select {
    &:focus {
      background-color: ${Colors.white};
    }
  }
`;

const defineBorderColor = (activeError: boolean | undefined) =>
  activeError ? `1px solid ${Colors.red2}` : `1px solid ${Colors.gray7}`;

export const InputCustomizado = styled(TextField)<InputCustomizadoProps>`
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border: ${({ $activeBorder, $activeError }) =>
      $activeBorder ? defineBorderColor($activeError) : `none`};
  }
  & .MuiOutlinedInput-root {
    border: none;

    min-height: 64px;
    max-height: 64px;
    background-color: ${Colors.inputBackground};
    margin-bottom: ${({ $marginBottomDesactived }) =>
      $marginBottomDesactived ? 0 : `${Metrics.standardSpacing}px`};
    border-radius: ${Metrics.tinySpacing}px;
    &:hover fieldset {
      border: 1px solid ${Colors.secondary};
    }
    &.Mui-focused fieldset {
      border: 1px solid ${Colors.secondary};
    }
    outline: none;
  }

  margin-top: ${Metrics.xxsSpacing};

  & .MuiInputBase-input {
    color: ${Colors.gray};
    font-size: ${Metrics.standardSpacing - 2}px;
    font-weight: 400;
  }

  ${({ disabled }) =>
    disabled &&
    `
	& .MuiOutlinedInput-notchedOutline {
		border: 1px ${Colors.gray7} solid;
	}
	& .MuiOutlinedInput-root {
		background-color: transparent;
		&:hover fieldset {
			border: 1px ${Colors.gray7} solid;
		}
		&.Mui-focused fieldset {
			border: 1px ${Colors.gray7} solid;
		}
	}
	`}
`;

export const CustomOutlinedInput = styled(OutlinedInput)`
  &.MuiFormLabel {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
      Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  &.MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${Colors.secondary};
    }
    &.Mui-focused fieldset {
      border-color: ${Colors.secondary};
    }
  }

  color: ${Colors.secondary};
`;
