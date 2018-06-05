import { Injectable } from '@angular/core';
import {ResourceService} from '../../../core/resource-service';
import {Conta} from '../../../core/model';
import {HttpClient} from '@angular/common/http';
import {ContaSerializer} from './conta-serializer';

@Injectable()
export class ContaService extends ResourceService<Conta> {

  constructor(http: HttpClient) {
    super(
      http,
      'contas',
      new ContaSerializer()
    );
  }

}
