export class Cliente {
  id: number;
  nome: string;
  cpf: string;
  telefonePrincipal: string;
  email: string;
  situacao: string;
}

export class Fornecedor {
  id: number;
  razao: string;
  fantasia: string;
  cnpj: string;
  inscEstadual: string;
  inscMunicipal: string;
  isento: boolean;
  telefonePrincipal: string;
  telefoneSecundario: string;
  contato: string;
  email: string;
  observacao: string;
  endereco = new Endereco();
}

export class Endereco {
  id: number;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}
