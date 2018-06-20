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
  telefonePrincipal: string;
  telefoneSecundario: string;
  email: string;
  situacao = 'EM DIA';
  rg: string;
  nascimento: Date;
  sexo: string;
  observacao: string;
  ativo = true;
  endereco = new Endereco();
  estadoCivil = new EstadoCivil();
}

export class EstadoCivil extends Resource {
  descricao: string;
}

export class Fornecedor extends Resource {
  razaoSocial: string;
  fantasia: string;
  cnpj: string;
  inscEstadual: string;
  inscMunicipal: string;
  isento = false;
  telefonePrincipal: string;
  telefoneSecundario: string;
  contato: string;
  email: string;
  observacao: string;
  ativo = true;
  endereco = new Endereco();
}

export class Empresa extends Resource {
  cnpj: string;
  fantasia: string;
  razaoSocial: string;
  inscEstadual: string;
  inscMunicipal: string;
  isento = false;
  email: string;
  dataFundacao: Date;
}

export class Conta extends Resource {
  descricao: string;
  numero: string;
  digito: string;
  saldoInicial: number;
  saldoAtual: number;
  carteira = false;
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
  txJuros: number;
  txMulta: number;
  conta = new Conta();
}

export class Lancamento extends Resource {
  tipo = 'RECEITA';
  descricao: string;
  valor: number;
  valorRecebido: number;
  dataVencimento: Date;
  dataPagamento: Date;
  dataBalanco: Date;
  observacao: string;
  contaFixa = false;
  numDocumento: string;
  numNf: string;
  nossoNumero: string;
  valorJuros: number;
  valorMulta: number;
  situacao = 'EM ABERTO'
  conta = new Conta();
  categoria = new Categoria();
  tipoLancamento = new TipoLancamento();
  fornecedor = new Fornecedor();
  cliente = new Cliente();
}

export class ParcelaReceber extends Resource {
  dataEmissao = new Date();
  dataVencimento: Date;
  valor: number;
  situacao = 'EM ABERTO';
  descricao: string;
  numDocumento: string;
  nossoNumero: string;
  conta = new Conta();
  cliente = new Cliente();
  categoria = new Categoria();
}

export class ParcelaPagar extends Resource {
  dataEmissao = new Date();
  dataVencimento: Date;
  valor: number;
  situacao = 'EM ABERTO';
  descricao: string;
  numDocumento: string;
  numNf: string;
  conta = new Conta();
  fornecedor = new Fornecedor();
  categoria = new Categoria();
}

export class ParcelaRecebimento extends Resource {
  dataRecebimento: Date;
  valorRecebido: number;
  situacao: string;
  parcelaReceber = new ParcelaReceber();
  conta = new Conta();
  tipoLancamento = new TipoLancamento();
}

export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}

export class EnderecoSerializer {
  fromJson(json: any): Endereco {
    const endereco = new Endereco();
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

