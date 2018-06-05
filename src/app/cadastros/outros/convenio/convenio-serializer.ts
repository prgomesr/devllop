import {Convenio} from '../../../core/model';

export class ConvenioSerializer {
  fromJson(json: any): Convenio {
    const convenio = new Convenio();
    convenio.id = json.id;
    convenio.numero = json.numero;
    convenio.txJuros = json.txJuros;
    convenio.txMulta = json.txMulta;
    convenio.conta = json.conta;

    return convenio;
  }

  toJson(convenio: Convenio): any {
    return {
      id: convenio.id,
      numero: convenio.numero,
      txJuros: convenio.txJuros,
      txMulta: convenio.txMulta,
      conta: convenio.conta
    };
  }
}
