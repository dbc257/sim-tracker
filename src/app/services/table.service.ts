import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TableService {
  error: any;
  result: any[] = [];

  constructor(private http: HttpClient) {}

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

  postBatches() {
    return this.http
      .post('https://simulator-api.onrender.com/v1/batches', {
        name: 'Batch 1',
        startIccid: '89520400007800343321',
        startImsi: '334140000000228',
        count: 10,
        isActive: true,
      })
      .subscribe(
        (val) => {
          console.log('POST call successful value returned in body', val);
        },
        (response) => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        }
      );
    // .pipe(map((res: any) => Object.values(res)));
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
