import {ParcelaPagar} from '../../core/model';
import * as moment from 'moment';

export class ContasPagarSerializer {
  fromJson(json: any): ParcelaPagar {
    const lancamentos = new ParcelaPagar();
    lancamentos.id = json.id;
    if (json.dataEmissao) {
      lancamentos.dataEmissao = moment(json.dataEmissao, 'YYYY-MM-DD').toDate();
    }
    if (json.dataVencimento) {
      lancamentos.dataVencimento = moment(json.dataVencimento, 'YYYY-MM-DD').toDate();
    }
    lancamentos.valor = json.valor;
    lancamentos.situacao = json.situacao;
    lancamentos.descricao = json.descricao;
    lancamentos.numDocumento = json.numDocumento;
    lancamentos.numNf = json.numNf;
    lancamentos.conta = json.conta;
    lancamentos.fornecedor = json.fornecedor;
    lancamentos.categoria = json.categoria;

    return lancamentos;
  }

  toJson(lancamentos: ParcelaPagar): any {
    return {
      id: lancamentos.id,
      dataEmissao: lancamentos.dataEmissao,
      dataVencimento: lancamentos.dataVencimento,
      valor: lancamentos.valor,
      situacao: lancamentos.situacao,
      descricao: lancamentos.descricao,
      numDocumento: lancamentos.numDocumento,
      numNf: lancamentos.numNf,
      conta: lancamentos.conta,
      fornecedor: lancamentos.fornecedor,
      categoria: lancamentos.categoria
    };
  }
}
