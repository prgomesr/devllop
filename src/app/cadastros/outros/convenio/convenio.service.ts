import { Injectable } from '@angular/core';
import {ResourceService} from '../../../core/resource-service';
import {Convenio} from '../../../core/model';
import {HttpClient} from '@angular/common/http';
import {ConvenioSerializer} from './convenio-serializer';

@Injectable()
export class ConvenioService extends ResourceService<Convenio> {

  constructor(http: HttpClient) {
    super(
      http,
      'convenios',
      new ConvenioSerializer()
    );
  }

}
