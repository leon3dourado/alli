export interface IPlataformWithIcon {
  descricao?: string;
  icon: JSX.Element;
  nome?: string;
  sku: string;
}

export interface IPlataform {
  sku: string;
  nome: string;
  descricao: string;
}

export interface IPlataformService {
  plataformas: IPlataform[];
}

export interface IPlans {
  sku: string;
  franquia: string;
  valor: string;
  aparelho?: DeviceInfo;
  ativo: boolean;
}

export interface IPlansService {
  planos: IPlans[];
}

interface DeviceInfo {
  nome: string;
  numeroParcelas: number;
  valor: string;
  valorParcela: string;
}

export interface IFormData {
  nome: string;
  email: string;
  data: string;
  cpf: string;
  telefone: string;
}
