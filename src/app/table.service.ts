import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable()
export class TableService {
  // configUrl = 'assets/config.json';
  // headers: string[] = [];
  // config: Config | undefined;
  error: any;
  result: any[] = [];

  constructor(private http: HttpClient) {}

  // getConfig() {
  //   return this.http.get<Config>(this.configUrl).pipe(
  //     retry(3), // retry a failed request up to 3 times
  //     catchError(this.handleError) // then handle the error
  //   );
  // }

  getSims() {
    return this.http
      .get('https://simulator-api.onrender.com/v1/sims')
      .pipe(map((res: any) => Object.values(res)));
  }

  getBatches() {
    return this.http
      .get('https://simulator-api.onrender.com/v1/batches')
      .pipe(map((res: any) => Object.values(res)));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url').pipe(catchError(this.handleError));
  }
}
