import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { useHistory, useParams } from "react-router";
import * as S from "./styles/PhonePlans.style";
import { useSnackbar } from "notistack";

import { IPlans } from "../../models/PhonePlansModel";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { searchPhonePlans } from "../../services/plans.service";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner/LoadingSpinner";

export const PhonePlans = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { sku } = useParams<{ sku: string }>();
  const [listPhonePlans, setListPhonePlans] = useState<IPlans[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>("");

  const searchAndListPhonePlanInformation = async () => {
    try {
      setLoading(true);
      const response = await searchPhonePlans(sku);
      setListPhonePlans(response.planos);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(`Não foi possível recuperar a lista com os planos.`, {
        variant: "error"
      });
    }
  };

  const navegarRota = (selectedPlan: IPlans) => {
    history.push({
      pathname: `/assinarPlano`,
      search: "",
      state: { selectedPlan }
    });
  };

  useEffect(() => {
    searchAndListPhonePlanInformation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.PhonePlansContainer>
      <BackButton />
      <S.Title variant="h3">Planos</S.Title>
      <S.Subtitle variant="h5">Selecione umas das opções abaixo:</S.Subtitle>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <S.PhonePlansGrid container spacing={2}>
          {listPhonePlans &&
            listPhonePlans.map((plan: IPlans, index: number) => (
              <S.ListPhonePlansGrid xs={12} sm={6} md={4} item key={index}>
                <S.ButtonCard
                  elevation={2}
                  onMouseEnter={() => setOptionSelected(plan.sku)}
                  onMouseLeave={() => setOptionSelected("")}
                  $active={optionSelected === plan.sku}
                  onClick={() => navegarRota(plan)}>
                  <S.PhoneIcon />
                  <Typography> Franquia {plan.franquia}</Typography>
                  <S.BoldText>R${plan.valor}</S.BoldText>
                  {plan.aparelho && (
                    <S.GridDevice>
                      <S.DeviceInfo>
                        {plan.aparelho.nome} por R${plan.aparelho.valor}
                      </S.DeviceInfo>
                      <S.DeviceInfoSmall>
                        {plan.aparelho.numeroParcelas > 1
                          ? `${plan.aparelho.numeroParcelas} parcelas de R$ ${plan.aparelho.valorParcela}`
                          : "à vista"}
                      </S.DeviceInfoSmall>
                    </S.GridDevice>
                  )}
                </S.ButtonCard>
              </S.ListPhonePlansGrid>
            ))}
        </S.PhonePlansGrid>
      )}
    </S.PhonePlansContainer>
  );
};
