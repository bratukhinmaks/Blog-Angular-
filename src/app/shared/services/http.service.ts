import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  add(newProduct) {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', newProduct, {
      headers: new HttpHeaders({
        "MyCustomHeader" : 'Hello my header'
      }),
    });
  }
  get(num: number) {
    let params = new HttpParams()
    params = params.append('_limit', `${num}`)
    params = params.append('custom', '10')
    return this.http.get('https://jsonplaceholder.typicode.com/todos', {
     params,
      observe: 'response'
    });
  }
  remove(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos?_limit=10/${id}`);
  }
}
