import {Moment} from 'moment';

export class Resource {
  id: number;
  parentId?: number;
}

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}

export class TipoLancamento extends Resource {
  descricao: string;
}

export class Categoria extends Resource {
  descricao: string;
}

export class Cliente extends Resource {
  nome: string;
  cpf: string;
  telefone_principal: string;
  telefone_secundario: string;
  email: string;
  situacao: string;
  rg: string;
  nascimento: Date;
  sexo: string;
  observacao: string;
  endereco = new Endereco();
  estado_civil = new EstadoCivil();
}

export class EstadoCivil extends Resource {
  descricao: string;
}

export class Fornecedor extends Resource {
  razao_social: string;
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

export class Empresa extends Resource {
  cnpj: string;
  fantasia: string;
  razao_social: string;
  insc_estadual: string;
  insc_municipal: string;
  isento: boolean;
  email: string;
  data_fundacao: Date;
}

export class Conta extends Resource {
  descricao: string;
  numero: string;
  digito: string;
  saldo_incial: number;
  saldo_atual: number;
  agencia = new Agencia();
  empresa = new Empresa();
}

export class Agencia extends Resource {
  numero: string;
  digito: string;
  telefone: string;
  gerente: string;
  banco = new Banco();
}

export class Banco extends Resource {
  numero: string;
  nome: string;
  telefone: string;
}

export class Convenio extends Resource {
  numero: string;
  tx_juros: number;
  tx_multa: number;
  conta = new Conta();
}

export class Lancamento extends Resource {
  tipo = 'RECEITA';
  descricao: string;
  valor: number;
  valor_recebido: number;
  data_vencimento: Date;
  data_pagamento: Date;
  data_balanco: Date;
  observacao: string;
  conta_fixa: boolean;
  num_documento: string;
  num_nf: string;
  nosso_numero: string;
  valor_juros: number;
  valor_multa: number;
  situacao = 'EM ABERTO'
  conta = new Conta();
  categoria = new Categoria();
  tipo_lancamento = new TipoLancamento();
  fornecedor = new Fornecedor();
  cliente = new Cliente();
}

export class Endereco extends Resource {
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}

export class EnderecoSerializer {
  fromJson(json: any): Endereco {
    const endereco = new Endereco();
    endereco.id = json.id;
    endereco.logradouro = json.logradouro;
    endereco.complemento = json.complemento;
    endereco.bairro = json.bairro;
    endereco.cidade = json.cidade;
    endereco.uf = json.uf;
    endereco.cep = json.cep;

    return endereco;
  }

  toJson(endereco: Endereco): any {
    return {
      id: endereco.id,
      logradouro: endereco.logradouro,
      complemento: endereco.complemento,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      uf: endereco.uf,
      cep: endereco.cep
    };
  }
}

export class EstadoCivilSerializer {
  fromJson(json: any): EstadoCivil {
    const estado = new EstadoCivil();
    estado.id = json.id;
    estado.descricao = json.descricao;

    return estado;
  }

  toJson(estado: EstadoCivil): any {
    return {
      id: estado.id,
      descricao: estado.descricao
    };
  }
}

