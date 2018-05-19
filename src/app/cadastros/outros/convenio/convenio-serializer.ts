import {Convenio} from '../../../core/model';

export class ConvenioSerializer {
  fromJson(json: any): Convenio {
    const convenio = new Convenio();
    convenio.id = json.id;
    convenio.numero = json.numero;
    convenio.tx_juros = json.tx_juros;
    convenio.tx_multa = json.tx_multa;
    convenio.conta = json.conta;

    return convenio;
  }

  toJson(convenio: Convenio): any {
    return {
      id: convenio.id,
      numero: convenio.numero,
      tx_juros: convenio.tx_juros,
      tx_multa: convenio.tx_multa,
      conta: convenio.conta
    };
  }
}
