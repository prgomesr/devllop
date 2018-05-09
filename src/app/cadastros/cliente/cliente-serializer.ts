import {Cliente} from '../../core/model';

export class ClienteSerializer {
  fromJson(json: any): Cliente {
    const cliente = new Cliente();
    cliente.ID = json.ID;
    cliente.CPF = json.CPF;
    cliente.EMAIL = json.EMAIL;
    cliente.NOME = json.NOME;
    cliente.SITUACAO = json.SITUACAO;
    cliente.TELEFONE_PRINCIPAL = json.TELEFONE_PRINCIPAL;
    cliente.TELEFONE_SECUNDARIO = json.TELEFONE_SECUNDARIO;
    cliente.SEXO = json.SEXO;
    cliente.NASCIMENTO = json.NASCIMENTO;
    cliente.RG = json.RG;
    cliente.ENDERECO_ID = json.ENDERECO_ID;
    cliente.ESTADO_CIVIL_ID = json.ESTADO_CIVIL_ID

    return cliente;
  }

  toJson(cliente: Cliente): any {
    return {
      ID: cliente.ID,
      CPF: cliente.CPF,
      EMAIL: cliente.EMAIL,
      NOME: cliente.NOME,
      SITUACAO: cliente.SITUACAO,
      TELEFONE_PRINCIPAL: cliente.TELEFONE_PRINCIPAL,
      TELEFONE_SECUNDARIO: cliente.TELEFONE_SECUNDARIO,
      SEXO: cliente.SEXO,
      NASCIMENTO: cliente.NASCIMENTO,
      RG: cliente.RG,
      ENDERECO_ID: cliente.ENDERECO_ID,
      ESTADO_CIVIL_ID: cliente.ESTADO_CIVIL_ID
    };
  }
}
