import { Injectable } from '@angular/core';
import {ResourceService} from '../../core/resource-service';
import {Lancamento} from '../../core/model';
import {HttpClient} from '@angular/common/http';
import {LancamentoSerializer} from './lancamento-serializer';
import {InstResourceService} from '../../core/inst-resource-service';

@Injectable()
export class LancamentoService extends InstResourceService<Lancamento> {

  constructor(http: HttpClient) {
    super(
      http,
      'lancamentos',
      new LancamentoSerializer()
    );
  }

}
