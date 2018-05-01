export class Resource {
  id: number;
  parentId?: number;
}

export interface Serializer {
  fromJson(json: any): Resource;
  toJson(resource: Resource): any;
}

export class Cliente extends Resource {
  nome: string;
  cpf: string;
  telefonePrincipal: string;
  email: string;
  situacao: string;
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
    endereco.parentId = json.parentId;
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
      parentId: endereco.parentId,
      logradouro: endereco.logradouro,
      complemento: endereco.complemento,
      bairro: endereco.bairro,
      cidade: endereco.cidade,
      uf: endereco.uf,
      cep: endereco.cep
    };
  }
}

