import { Injectable } from '@angular/core';
import {ResourceService} from '../../../core/resource-service';
import {Agencia} from '../../../core/model';
import {HttpClient} from '@angular/common/http';
import {AgenciaSerializer} from './agencia-serializer';

@Injectable()
export class AgenciaService extends ResourceService<Agencia> {

  constructor(http: HttpClient) {
    super(
      http,
      'localhost',
      'agencias',
      new AgenciaSerializer()
    );
  }

}
