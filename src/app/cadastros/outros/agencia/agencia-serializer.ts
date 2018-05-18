import {Agencia} from '../../../core/model';

export class AgenciaSerializer {
  fromJson(json: any): Agencia {
    const agencia = new Agencia();
    agencia.id = json.id;
    agencia.numero = json.numero;
    agencia.digito = json.digito;
    agencia.telefone = json.telefone;
    agencia.gerente = json.gerente;
    agencia.banco = json.banco

    return agencia;
  }

  toJson(agencia: Agencia): any {
    return {
      id: agencia.id,
      numero: agencia.numero,
      digito: agencia.digito,
      telefone: agencia.telefone,
      gerente: agencia.gerente,
      banco: agencia.banco
    };
  }
}
