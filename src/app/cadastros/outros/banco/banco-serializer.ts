import {Banco} from '../../../core/model';

export class BancoSerializer {
  fromJson(json: any): Banco {
    const banco = new Banco();
    banco.id = json.id;
    banco.numero = json.numero;
    banco.nome = json.nome;
    banco.telefone = json.telefone;

    return banco;
  }

  toJson(banco: Banco): any {
    return {
      id: banco.id,
      numero: banco.numero,
      nome: banco.nome,
      telefone: banco.telefone
    };
  }
}
