import {Cliente} from '../../core/model';
import * as moment from 'moment';

export class ClienteSerializer {
  fromJson(json: any): Cliente {
    const cliente = new Cliente();
    cliente.id = json.id;
    cliente.cpf = json.cpf;
    cliente.email = json.email;
    cliente.nome = json.nome;
    cliente.situacao = json.situacao;
    cliente.telefonePrincipal = json.telefonePrincipal;
    cliente.telefoneSecundario = json.telefoneSecundario;
    cliente.sexo = json.sexo;
    cliente.nascimento = moment(json.nascimento, 'YYYY-MM-DD').toDate();
    cliente.rg = json.rg;
    cliente.observacao = json.observacao;
    cliente.ativo = json.ativo;
    cliente.endereco = json.endereco;
    cliente.estadoCivil = json.estadoCivil

    return cliente;
  }

  toJson(cliente: Cliente): any {
    return {
      id: cliente.id,
      cpf: cliente.cpf,
      email: cliente.email,
      nome: cliente.nome,
      situacao: cliente.situacao,
      telefonePrincipal: cliente.telefonePrincipal,
      telefoneSecundario: cliente.telefoneSecundario,
      sexo: cliente.sexo,
      nascimento: cliente.nascimento,
      rg: cliente.rg,
      observacao: cliente.observacao,
      ativo: cliente.ativo,
      endereco: cliente.endereco,
      estadoCivil: cliente.estadoCivil
    };
  }
}
