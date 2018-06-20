import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ParcelaPagar} from '../../core/model';
import {InstResourceService} from '../../core/inst-resource-service';
import {ContasPagarSerializer} from './contas-pagar-serializer';

@Injectable()
export class ContasPagarService extends InstResourceService<ParcelaPagar> {

  constructor(http: HttpClient) {
    super(
      http,
      'lancamentosPagar',
      new ContasPagarSerializer()
    );
  }

}
