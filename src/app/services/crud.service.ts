import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from '../models/batch.model';
import { Sim } from '../country';

const baseUrl = 'https://simulator-api.onrender.com/v1/batches';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Sim[]> {
    return this.http.get<Sim[]>(baseUrl);
  }

  get(id: any): Observable<Batch> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  // findByTitle(title: any): Observable<Batch[]> {
  //   return this.http.get<Batch[]>(`${baseUrl}?title=${title}`);
  // }
}
