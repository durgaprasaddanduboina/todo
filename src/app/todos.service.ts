import { Injectable } from '@angular/core';
import { Observable,throwError as ErrorObservable } from 'rxjs';


import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { takeUntil, filter, catchError, map } from 'rxjs/operators';


@Injectable()
export class TodosService {

  constructor(private httpClient: HttpClient) {  }
  baseUrl = 'https://jsonplaceholder.typicode.com/users';
  getEmployees(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl)
    .pipe(catchError((error: any) => ErrorObservable(error)));
}
create(data:any): Observable<any> {
  const headers=new HttpHeaders();
  headers.append('Content-type', 'application/json; charset=UTF-8');
  return this.httpClient.post(`${this.baseUrl}`,data)
  .pipe(catchError((error: any) => ErrorObservable(error)));
}
update(data:any): Observable<any> {
  const headers=new HttpHeaders();
  headers.append('Content-type', 'application/json; charset=UTF-8');
  return this.httpClient.put(`${this.baseUrl}/${data.id}`,data)
  .pipe(catchError((error: any) => ErrorObservable(error)));
}
delete(data:any): Observable<any> {
  
  return this.httpClient.delete(`${this.baseUrl}/${data.id}`)
  .pipe(catchError((error: any) => ErrorObservable(error)));
}
private handleError(errorResponse: HttpErrorResponse) {
  if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
  } else {
      console.error('Server Side Error: ', errorResponse);
  }

  return new Error('There is a problem with the service. We are notified & working on it. Please try again later.');
}
}
