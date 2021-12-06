/* eslint-disable react/prop-types */
import { CircularProgress, Grid } from "@material-ui/core";
import { ReactNode } from "react";
import { Colors } from "../../../constants/colors";
import * as S from "./styles/GenericModal.style";

export type IconProps = "success" | "error" | "warning" | "leave" | "save";
export interface IModalGenericProps {
  openComponent: boolean;
  setOpenComponent: (openComponent: boolean) => void;
  icon?: IconProps;
  title?: string;
  subtitle?: string;
  actionButtonConfirm: () => void;
  buttonCancelActive: boolean;
  textButtonConfirm?: string;
  textCancelButton?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

export const GenericModal: React.FC<IModalGenericProps> = ({
  openComponent,
  setOpenComponent,
  icon,
  title,
  subtitle,
  actionButtonConfirm,
  buttonCancelActive,
  textButtonConfirm,
  textCancelButton,
  loading,
  disabled,
  children
}) => {
  const closeComponent = () => setOpenComponent(false);
  const iconSelected = () => {
    switch (icon) {
      case "success":
        return <S.IconCheck />;
      case "error":
        return <S.IconClose />;
      case "warning":
        return <S.IconWarning />;
      case "leave":
        return <S.IconExit />;
      case "save":
        return <S.IconSave />;
      default:
        return null;
    }
  };
  const iconName = iconSelected();

  return (
    <S.ModalDialog open={openComponent} transitionDuration={{ enter: 450, exit: 450 }}>
      <S.ModalPaper>
        {children ? (
          children
        ) : (
          <>
            {icon && <S.BoxIcon>{iconName}</S.BoxIcon>}
            <S.Title variant="h4">{title}</S.Title>
            {subtitle && <S.Subtitle variant="h6">{subtitle}</S.Subtitle>}
          </>
        )}
      </S.ModalPaper>
      <Grid container style={{ textAlign: "center" }}>
        {buttonCancelActive && (
          <S.ButtonGrid item xs={6}>
            <S.CancelButton
              disabled={!buttonCancelActive}
              onClick={closeComponent}
              fullWidth>
              {textCancelButton ? textCancelButton : "Cancelar"}
            </S.CancelButton>
          </S.ButtonGrid>
        )}
        <S.ButtonGrid item xs={buttonCancelActive ? 6 : 12}>
          <S.ConfirmButton onClick={actionButtonConfirm} fullWidth disabled={disabled}>
            {textButtonConfirm ? textButtonConfirm : "Confirmar"}
            {loading ? (
              <CircularProgress
                style={{ marginLeft: 16, color: Colors.primary }}
                size={24}
              />
            ) : null}
          </S.ConfirmButton>
        </S.ButtonGrid>
      </Grid>
    </S.ModalDialog>
  );
};
