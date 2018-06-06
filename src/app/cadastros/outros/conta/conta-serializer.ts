import {Conta} from '../../../core/model';

export class ContaSerializer {
  fromJson(json: any): Conta {
    const conta = new Conta();
    conta.id = json.id;
    conta.descricao = json.descricao;
    conta.numero = json.numero;
    conta.digito = json.digito;
    conta.saldoInicial = json.saldoInicial;
    conta.saldoAtual = json.saldoAtual;
    conta.carteira = json.carteira;
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
      saldoInicial: conta.saldoInicial,
      saldoAtual: conta.saldoAtual,
      carteira: conta.carteira,
      agencia: conta.agencia,
      empresa: conta.empresa
    };
  }
}
