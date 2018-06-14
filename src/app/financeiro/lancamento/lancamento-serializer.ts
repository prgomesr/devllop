import {Lancamento} from '../../core/model';
import * as moment from 'moment';

export class LancamentoSerializer {
  fromJson(json: any): Lancamento {
    const lancamento = new Lancamento();
    lancamento.id = json.id;
    lancamento.tipo = json.tipo;
    lancamento.descricao = json.descricao;
    lancamento.valor = json.valor;
    lancamento.valorRecebido = json.valorRecebido;
    lancamento.dataVencimento = moment (json.dataVencimento, 'YYYY-MM-DD').toDate();
    lancamento.dataPagamento = moment (json.dataPagamento, 'YYYY-MM-DD').toDate();
    lancamento.dataBalanco = moment (json.dataBalanco, 'YYYY-MM-DD').toDate();
    lancamento.observacao = json.observacao;
    lancamento.contaFixa = json.contaFixa;
    lancamento.numDocumento = json.numDocumento;
    lancamento.numNf = json.numNf;
    lancamento.nossoNumero = json.nossoNumero;
    lancamento.valorJuros = json.valorJuros;
    lancamento.valorMulta = json.valorMulta;
    lancamento.situacao = json.situacao;
    lancamento.conta = json.conta;
    lancamento.categoria = json.categoria;
    lancamento.tipoLancamento = json.tipoLancamento;
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
      valorRecebido: lancamento.valorRecebido,
      dataVencimento: lancamento.dataVencimento,
      dataPagamento: lancamento.dataPagamento,
      dataBalanco: lancamento.dataBalanco,
      observacao: lancamento.observacao,
      contaFixa: lancamento.contaFixa,
      numDocumento: lancamento.numDocumento,
      numNf: lancamento.numNf,
      nossoNumero: lancamento.nossoNumero,
      valorJuros: lancamento.valorJuros,
      valorMulta: lancamento.valorMulta,
      situacao: lancamento.situacao,
      conta: lancamento.conta,
      categoria: lancamento.categoria,
      tipoLancamento: lancamento.tipoLancamento,
      fornecedor: lancamento.fornecedor,
      cliente: lancamento.cliente
    };
  }
}
