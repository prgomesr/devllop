import {Empresa} from '../../core/model';
import * as moment from 'moment';

export class EmpresaSerializer {
  fromJson(json: any): Empresa {
    const empresa = new Empresa();
    empresa.id = json.id;
    empresa.cnpj = json.cnpj;
    empresa.fantasia = json.fantasia;
    empresa.razao_social = json.razao_social;
    empresa.insc_estadual = json.insc_estadual;
    empresa.insc_municipal = json.insc_municipal;
    empresa.isento = json.isento;
    empresa.email = json.email;
    empresa.data_fundacao = moment (json.data_fundacao, 'YYYY-MM-DD').toDate();
    return empresa;
  }

  toJson(empresa: Empresa): any {
    return {
      id: empresa.id,
      cnpj: empresa.cnpj,
      fantasia: empresa.fantasia,
      razao_social: empresa.razao_social,
      insc_estadual: empresa.insc_estadual,
      insc_municipal: empresa.insc_municipal,
      isento: empresa.isento,
      email: empresa.email,
      data_fundacao: empresa.data_fundacao
    };
  }
}
