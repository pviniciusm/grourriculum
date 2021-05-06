import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  private backendUrl: string = 'http://localhost:3333/api';

  constructor(private http: HttpClient) { }

  listComments(): Observable<any> {
    return this.http.get(this.backendUrl + '/comments')
      .pipe(
        catchError(this.handleError)
      );
  }

  postComment(campos: object) {
    return this.http.post(this.backendUrl + '/comments', campos)
      .toPromise();
      // .then(callback);
  }

  errorHandling (err) {
    console.log(err);
    alert('Erro na transação!');

    throw new Error;
  }

  list(callback: any) {
    let apiURL = this.backendUrl + '/comments'
    this.http.get(apiURL)
      .toPromise()
      .then(callback);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
