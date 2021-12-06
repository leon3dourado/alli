import * as Yup from "yup";

const signPlanSchema = Yup.object().shape({
  telefone: Yup.string()
    .required("Informar o número do celular")
    .matches(
      /^(\(?\d{2}\)?)(\D*)9(\d{4})([-]?|\s*?)(\d{4})/,
      "Número do celular inválido. Por favor, verificar."
    ),
  cpf: Yup.string()
    .required("O campo cpf é obrigatório.")
    .matches(
      /(^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$)/,
      "Número do cpf inválido. Por favor, verificar."
    ),
  data: Yup.string()
    .required("O campo data de nascimento é obrigatório")
    .matches(
      /^\d{2}[./-]\d{2}[./-]\d{4}$/,
      "Data de nascimento inválida. Por favor, verificar"
    ),
  email: Yup.string().email("Email inválido.").required("O campo email é obrigatório."),
  nome: Yup.string().required("O campo nome é obrigatório.")
});

export const Validate = {
  signPlanSchema
};
