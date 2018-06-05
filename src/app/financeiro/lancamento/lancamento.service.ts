import { Injectable } from '@angular/core';
import {ResourceService} from '../../core/resource-service';
import {Lancamento} from '../../core/model';
import {HttpClient} from '@angular/common/http';
import {LancamentoSerializer} from './lancamento-serializer';

@Injectable()
export class LancamentoService extends ResourceService<Lancamento> {

  constructor(http: HttpClient) {
    super(
      http,
      'lancamentos',
      new LancamentoSerializer()
    );
  }

}
