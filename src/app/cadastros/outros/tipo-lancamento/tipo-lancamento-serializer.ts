import {TipoLancamento} from '../../../core/model';

export class TipoLancamentoSerializer {
  fromJson(json: any): TipoLancamento {
    const tipo = new TipoLancamento();
    tipo.id = json.id;
    tipo.descricao = json.descricao;

    return tipo;
  }

  toJson(tipo: TipoLancamento): any {
    return {
      id: tipo.id,
      descricao: tipo.descricao
    };
  }
}
