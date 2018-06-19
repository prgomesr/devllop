import {ParcelaReceber} from '../../core/model';
import * as moment from 'moment';

export class ContasReceberSerializer {
  fromJson(json: any): ParcelaReceber {
    const lancamentos = new ParcelaReceber();
    lancamentos.id = json.id;
    if (lancamentos.dataEmissao) {
      lancamentos.dataEmissao = moment(json.dataEmissao, 'YYYY-MM-DD').toDate();
    }
    if (lancamentos.dataVencimento) {
      lancamentos.dataVencimento = moment(json.dataVencimento, 'YYYY-MM-DD').toDate();
    }
    lancamentos.valor = json.valor;
    lancamentos.situacao = json.situacao;
    lancamentos.descricao = json.descricao;
    lancamentos.numDocumento = json.numDocumento;
    lancamentos.nossoNumero = json.nossoNumero;
    lancamentos.conta = json.conta;
    lancamentos.cliente = json.cliente;
    lancamentos.categoriaRecebimento = json.categoriaRecebimento;

    return lancamentos;
  }

  toJson(lancamentos: ParcelaReceber): any {
    return {
      id: lancamentos.id,
      dataEmissao: lancamentos.dataEmissao,
      dataVencimento: lancamentos.dataVencimento,
      valor: lancamentos.valor,
      situacao: lancamentos.situacao,
      descricao: lancamentos.descricao,
      numDocumento: lancamentos.numDocumento,
      nossoNumero: lancamentos.nossoNumero,
      conta: lancamentos.conta,
      cliente: lancamentos.cliente,
      categoriaRecebimento: lancamentos.categoriaRecebimento
    };
  }
}
