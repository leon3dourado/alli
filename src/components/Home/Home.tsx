import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";
import TabletIcon from "@mui/icons-material/Tablet";
import WifiIcon from "@mui/icons-material/Wifi";
import ComputerIcon from "@mui/icons-material/Computer";

import { IPlataformWithIcon, IPlataform } from "../../models/PhonePlansModel";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner/LoadingSpinner";
import { searchPlataforms } from "../../services/plans.service";
import { formatTextRemovingPipe } from "../../utils/functions";
import * as S from "./styles/Home.style";
import { usePlataformsContext } from "../../contexts/plataforms/plataformsContext";

export const Home = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [listPlataformsInformation, setListPlataformsInformation] =
    useState<IPlataformWithIcon[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<string>("");
  const { dispatch, actions } = usePlataformsContext();

  const plataformsIconsList = [
    {
      sku: "TBT01",
      icon: <TabletIcon />
    },
    {
      sku: "CPT02",
      icon: <ComputerIcon />
    },
    {
      sku: "WF03",
      icon: <WifiIcon />
    }
  ];

  const searchAndListPlataforms = async () => {
    try {
      setLoading(true);
      const response = await searchPlataforms();
      const PLATAFORMS = response.plataformas;

      const plataformsListWithIcons = plataformsIconsList.map((iconsList) => ({
        ...PLATAFORMS.find((item: IPlataform) => item.sku === iconsList.sku && item),
        ...iconsList
      }));

      setListPlataformsInformation(plataformsListWithIcons);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(`Não foi possível recuperar a lista com as plataformas.`, {
        variant: "error"
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const goToPlanPage = (item: any) => {
    dispatch({
      type: actions.STORAGE_PLATAFORMS_INFORMATION,
      payload: { sku: item.sku, nome: item.nome, descricao: item.descricao }
    });

    history.push(`/planos/${item.sku}`);
  };

  useEffect(() => {
    searchAndListPlataforms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.HomeContainer>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <S.Title variant="h3">Plataformas</S.Title>
          <S.Subtitle variant="h5">Selecione umas das opções abaixo:</S.Subtitle>
          {listPlataformsInformation && (
            <S.HomeGrid container spacing={2}>
              {listPlataformsInformation.map(
                (item: IPlataformWithIcon, index: number) => (
                  <S.CardGrid xs={12} sm={6} md={4} item key={index}>
                    <S.ButtonCard
                      elevation={2}
                      onMouseEnter={() => setOptionSelected(item.sku)}
                      onMouseLeave={() => setOptionSelected("")}
                      $active={optionSelected === item.sku}
                      onClick={() => goToPlanPage(item)}>
                      <S.IconContainer
                        component={item.icon}
                        $active={optionSelected === item.sku}
                        $optionSelected={optionSelected}
                      />
                      <S.BoldText>{item.nome}</S.BoldText>
                      <S.RegularText> {item.sku}</S.RegularText>
                      <S.DescriptionText>
                        {item.descricao && formatTextRemovingPipe(item.descricao)}
                      </S.DescriptionText>
                    </S.ButtonCard>
                  </S.CardGrid>
                )
              )}
            </S.HomeGrid>
          )}
        </>
      )}
    </S.HomeContainer>
  );
};
