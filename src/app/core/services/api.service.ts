import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable, throwError } from 'rxjs'
import { delay, map, catchError } from 'rxjs/operators'

import { config } from '../../config/app.config'

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  retrieve(url): Observable<any> {
    return this.httpClient
      .get(this.getBaseUrl() + config.API_PREFIX + url)
      .pipe(delay(100),catchError(this.handleError))
  }

  save(url, params): Observable<any> {
    return this.httpClient
      .post(this.getBaseUrl() + config.API_PREFIX + url, params)
      .pipe(delay(100), catchError(this.handleError))
  }

  update(url, params): Observable<any> {
    return this.httpClient
      .put(this.getBaseUrl() + config.API_PREFIX + url, params)
      .pipe(delay(100), catchError(this.handleError))
  }

  destroy(url): Observable<any> {
    return this.httpClient
      .delete(this.getBaseUrl() + config.API_PREFIX + url)
      .pipe(delay(100), catchError(this.handleError))
  }

  private getBaseUrl() {
    return `${location.protocol}//${location.hostname}:${config.API_PORT}/`
  }

  private handleError(error: any) {
    let errorMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error'

    return throwError(errorMsg)
  }

}
