export class Resource {
  ID: number;
  parentId?: number;
}

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}

export class Cliente extends Resource {
  NOME: string;
  CPF: string;
  TELEFONE_PRINCIPAL: string;
  TELEFONE_SECUNDARIO: string;
  EMAIL: string;
  SITUACAO: string;
  RG: string;
  NASCIMENTO: Date;
  SEXO: string;
  ENDERECO_ID = new Endereco();
  ESTADO_CIVIL_ID = new EstadoCivil();
}

export class EstadoCivil extends Resource {
  descricao: string;
}

export class Fornecedor extends Resource {
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

export class Endereco extends Resource {
  LOGRADOURO: string;
  NUMERO: number;
  COMPLEMENTO: string;
  BAIRRO: string;
  CIDADE: string;
  UF: string;
  CEP: string;
}

export class EnderecoSerializer {
  fromJson(json: any): Endereco {
    const endereco = new Endereco();
    endereco.parentId = json.parentId;
    endereco.LOGRADOURO = json.LOGRADOURO;
    endereco.COMPLEMENTO = json.COMPLEMENTO;
    endereco.BAIRRO = json.BAIRRO;
    endereco.CIDADE = json.CIDADE;
    endereco.UF = json.UF;
    endereco.CEP = json.CEP;

    return endereco;
  }

  toJson(endereco: Endereco): any {
    return {
      parentId: endereco.parentId,
      LOGRADOURO: endereco.LOGRADOURO,
      COMPLEMENTO: endereco.COMPLEMENTO,
      BAIRRO: endereco.BAIRRO,
      CIDADE: endereco.CIDADE,
      UF: endereco.UF,
      CEP: endereco.CEP
    };
  }
}

export class EstadoCivilSerializer {
  fromJson(json: any): EstadoCivil {
    const estado = new EstadoCivil();
    estado.parentId = json.parentId;
    estado.descricao = json.descricao;

    return estado;
  }

  toJson(estado: EstadoCivil): any {
    return {
      parentId: estado.parentId,
      descricao: estado.descricao
    };
  }
}

