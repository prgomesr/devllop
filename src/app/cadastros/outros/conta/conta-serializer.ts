import {Conta} from '../../../core/model';

export class ContaSerializer {
  fromJson(json: any): Conta {
    const conta = new Conta();
    conta.id = json.id;
    conta.descricao = json.descricao;
    conta.numero = json.numero;
    conta.digito = json.digito;
    conta.saldo_incial = json.saldo_incial;
    conta.saldo_atual = json.saldo_atual;
    conta.agencia = json.agencia;
    conta.empresa = json.empresa;

    return conta;
  }

  toJson(conta: Conta): any {
    return {
      id: conta.id,
      descricao: conta.descricao,
      numero: conta.numero,
      digito: conta.digito,
      saldo_incial: conta.saldo_incial,
      saldo_atual: conta.saldo_atual,
      agencia: conta.agencia,
      empresa: conta.empresa
    };
  }
}
