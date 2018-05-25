import {Resource, Serializer} from './model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {QueryOptions} from './query-options';
import 'rxjs/add/operator/map';

export class ResourceService<T extends Resource> {
  constructor(private httpClient: HttpClient,
              private url: string,
              private endpoint: string,
              private serializer: Serializer) {}

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.headers(), this.serializer.toJson(item))
      .map(data => this.serializer.fromJson(data) as T);
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item))
      .map(data => this.serializer.fromJson(data) as T);
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get<any>(`${this.url}/${this.endpoint}/${id}`)
      .map((data: any) => this.serializer.fromJson(data) as T);
  }

  list(): Observable<T[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient
      .get<any[]>(`${this.url}/${this.endpoint}`, httpOptions);
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  getCep(cep) {
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json`);
  }

  private convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }

  private headers () {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return httpOptions;
  }

}
