import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../../core/resource-service';
import {TipoLancamento} from '../../../core/model';
import {TipoLancamentoSerializer} from './tipo-lancamento-serializer';

@Injectable()
export class TipoLancamentoService extends ResourceService<TipoLancamento> {

  constructor(http: HttpClient) {
    super(
      http,
      'tiposLancamentos',
      new TipoLancamentoSerializer());
  }

}
