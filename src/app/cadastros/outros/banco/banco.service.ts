import { Injectable } from '@angular/core';
import {ResourceService} from '../../../core/resource-service';
import {Banco} from '../../../core/model';
import {HttpClient} from '@angular/common/http';
import {BancoSerializer} from './banco-serializer';

@Injectable()
export class BancoService extends ResourceService<Banco> {

  constructor(http: HttpClient) {
    super(
      http,
      'http://localhost:8080',
      'bancos',
      new BancoSerializer()
    );
  }

}
