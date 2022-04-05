import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Sims } from '../sims/sims.interface';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable()
export class SimsService {
  simsUrl = 'https://simulator-api.onrender.com/v1/sims'; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SimsService');
  }

  /** GET */
  getSims() {
    return this.http.get<Sims[]>(this.simsUrl).pipe(
      map((res: any) => {
        return Object.values(res)[0];
      }),
      catchError(this.handleError('getSims', []))
    );
  }

  /* GET */
  searchSims(term: string): Observable<Sims[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ? { params: new HttpParams().set('name', term) } : {};

    return this.http
      .get<Sims[]>(this.simsUrl, options)
      .pipe(catchError(this.handleError<Sims[]>('searchSims', [])));
  }

  //////// Save methods //////////

  /** POST */
  addSims(sim: Sims): Observable<Sims> {
    return this.http
      .post<Sims>(this.simsUrl, sim, httpOptions)
      .pipe(catchError(this.handleError('addSim', sim)));
  }

  /** DELETE */
  deleteSim(id: number): Observable<unknown> {
    const url = `${this.simsUrl}/${id}`;
    return this.http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError('deleteSim')));
  }

  /** PUT */
  updateSim(sim: Sims): Observable<Sims> {
    httpOptions.headers = httpOptions.headers.set(
      'Authorization',
      'my-new-auth-token'
    );

    return this.http
      .put<Sims>(this.simsUrl, sim, httpOptions)
      .pipe(catchError(this.handleError('updateSim', sim)));
  }
}
