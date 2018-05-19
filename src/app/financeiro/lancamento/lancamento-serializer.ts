import {Lancamento} from '../../core/model';
import * as moment from 'moment';

export class LancamentoSerializer {
  fromJson(json: any): Lancamento {
    const lancamento = new Lancamento();
    lancamento.id = json.id;
    lancamento.tipo = json.tipo;
    lancamento.descricao = json.descricao;
    lancamento.valor = json.valor;
    lancamento.valor_recebido = json.valor_recebido;
    lancamento.data_vencimento = moment (json.data_vencimento, 'YYYY-MM-DD').toDate();
    lancamento.data_pagamento = moment (json.data_pagamento, 'YYYY-MM-DD').toDate();
    lancamento.data_balanco = moment (json.data_balanco, 'YYYY-MM-DD').toDate();
    lancamento.observacao = json.observacao;
    lancamento.conta_fixa = json.conta_fixa;
    lancamento.num_documento = json.num_documento;
    lancamento.num_nf = json.num_nf;
    lancamento.nosso_numero = json.nosso_numero;
    lancamento.valor_juros = json.valor_juros;
    lancamento.valor_multa = json.valor_multa;
    lancamento.situacao = json.situacao;
    lancamento.conta = json.conta;
    lancamento.categoria = json.categoria;
    lancamento.tipo_lancamento = json.tipo_lancamento;
    lancamento.fornecedor = json.fornecedor;
    lancamento.cliente = json.cliente;

    return lancamento;
  }

  toJson(lancamento: Lancamento): any {
    return {
      id: lancamento.id,
      tipo: lancamento.tipo,
      descricao: lancamento.descricao,
      valor: lancamento.valor,
      valor_recebido: lancamento.valor_recebido,
      data_vencimento: lancamento.data_vencimento,
      data_pagamento: lancamento.data_pagamento,
      data_balanco: lancamento.data_balanco,
      observacao: lancamento.observacao,
      conta_fixa: lancamento.conta_fixa,
      num_documento: lancamento.num_documento,
      num_nf: lancamento.num_nf,
      nosso_numero: lancamento.nosso_numero,
      valor_juros: lancamento.valor_juros,
      valor_multa: lancamento.valor_multa,
      situacao: lancamento.situacao,
      conta: lancamento.conta,
      categoria: lancamento.categoria,
      tipo_lancamento: lancamento.tipo_lancamento,
      fornecedor: lancamento.fornecedor,
      cliente: lancamento.cliente
    };
  }
}
