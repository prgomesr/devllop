import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContasReceberSerializer} from './contas-receber-serializer';
import {ParcelaReceber} from '../../core/model';
import {InstResourceService} from '../../core/inst-resource-service';

@Injectable()
export class ContasReceberService extends InstResourceService<ParcelaReceber> {

  constructor(http: HttpClient) {
    super(
      http,
      'lancamentosReceber',
      new ContasReceberSerializer()
    );
  }

}
