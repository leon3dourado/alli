import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useSnackbar } from "notistack";
import { Form } from "@unform/web";
import { ValidationError } from "yup";

import * as S from "./styles/SignPlan.style";
import { Validate } from "./validation";
import { BackButton } from "../../shared/components/BackButton/BackButton";
import { CustomInput } from "../../shared/components/CustomInput/CustomInput";
import { GenericModal } from "../../shared/components/GenericModal/GenericModal";
import { IFormData, IPlans } from "../../models/PhonePlansModel";
import { usePlataformsContext } from "../../contexts/plataforms/plataformsContext";

interface ISelectedPlan {
  selectedPlan: IPlans;
}
export const SignPlan = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation<ISelectedPlan>();
  const { state } = usePlataformsContext();

  const handleSubmit = async (form: IFormData) => {
    try {
      await Validate.signPlanSchema.validate(form);
      console.log(`
   
      DADOS:
      ============================================================
      Plataforma:  ${state.nome}
      Sku da plataforma: ${state.sku}
      Plano escolhido: ${location.state.selectedPlan.franquia}
      Valor do plano: ${location.state.selectedPlan.valor}
      Sku do plano: ${location.state.selectedPlan.sku}
      Nome: ${form.nome}
      E-mail: ${form.email}
      Data de Nascimento: ${form.data}
      Cpf: ${form.cpf}
      Telefone: ${form.telefone}
      ============================================================

      Desafio realizado por: 
      Leonardo Dourado
      https://github.com/leon3dourado
      `);
      setOpenModal(true);
    } catch (erro) {
      if (erro instanceof Error || erro instanceof ValidationError) {
        enqueueSnackbar(erro.message, { variant: "error" });
      }
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    history.push("/");
  };

  return (
    <S.MainContainer>
      <BackButton />
      <S.Title variant="h3">Assinatura do Plano </S.Title>
      <S.Subtitle variant="h5">Por favor preencher o formulário abaixo:</S.Subtitle>
      <S.HomeGrid container spacing={2}></S.HomeGrid>
      <Form onSubmit={handleSubmit}>
        <S.FormContainer container spacing={4}>
          <S.FormGrid xs={12} sm={6} md={4} item>
            <CustomInput
              name="nome"
              placeholder="Ex: Ana Rita Costa"
              label="Nome:"
              size={100}
            />
            <CustomInput
              name="email"
              placeholder="Ex: seucontato@gmail.com"
              label="Email:"
              size={100}
            />
            <CustomInput
              name="data"
              placeholder="Ex: 01/10/1980"
              label="Data de nascimento:"
              mask="99/99/9999"
              size={100}
            />
            <CustomInput
              name="cpf"
              placeholder="Ex: 000.000.000-00"
              label="CPF:"
              size={100}
              mask="999.999.999-99"
            />
            <CustomInput
              name="telefone"
              placeholder="Ex: (71) 9 0000 - 0000"
              label="Telefone contato:"
              size={100}
              mask={"(99)99999-9999"}
            />
            <S.ButtonSubmitContainer>
              <S.ButtonSubmit type="submit">Finalizar cadastro</S.ButtonSubmit>
            </S.ButtonSubmitContainer>
          </S.FormGrid>
        </S.FormContainer>
      </Form>
      {openModal && (
        <GenericModal
          openComponent={openModal}
          setOpenComponent={handleCloseModal}
          title="Cadastro realizado!"
          subtitle="O cadastro foi realizado com sucesso! Por favor, verificar o console.log ;)"
          actionButtonConfirm={handleCloseModal}
          buttonCancelActive={false}
          icon="success"
        />
      )}
    </S.MainContainer>
  );
};
