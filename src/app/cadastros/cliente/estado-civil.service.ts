import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EstadoCivil} from '../../core/model';

@Injectable()
export class EstadoCivilService {
  url = 'http://192.168.1.115:8000';
  model = 'estadosCivis';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable <EstadoCivil[]> {
    return this.http.get<any[]>(`${this.url}/${this.model}`);
  }

}
