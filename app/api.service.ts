import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  httpPostOptions;

  httpPostOptions_without_cred =
    {
      headers:
        new HttpHeaders(
          {
            "Content-Type": "application/json"
          }),
          observe: 'response' as 'response'
    };

    csrftoken = this.getCookie('csrftoken');
    httpPostOptions_with_cred =
    {
      headers:
        new HttpHeaders(
          {
            "Content-Type": "application/json",
            'X-CSRFToken': this.csrftoken
          }),
          withCredentials: true,
          observe: 'response' as 'response'
    };


  baseUrl: string = 'http://127.0.0.1:8000/'

  public post_api(endpoint, post_data, with_credentials = false) {
    if (with_credentials == true) {
      this.httpPostOptions = this.httpPostOptions_with_cred
    }
    else {
      this.httpPostOptions = this.httpPostOptions_without_cred
    }

    return this.httpClient.post<any>(this.baseUrl + endpoint, post_data, this.httpPostOptions).pipe(
      catchError(this.handleError),
    );
  }

  get_api(endpoint, with_cred=true) {
    if(with_cred){
      this.httpPostOptions = this.httpPostOptions_with_cred
    }else{
      this.httpPostOptions = this.httpPostOptions_without_cred
    }
    return this.httpClient.get<any>(this.baseUrl + endpoint, this.httpPostOptions).pipe(
      catchError(this.handleError)
    );
  }

  getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  handleError(error) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      // client-side error

      errorMessage = `Error: ${error.error.message}`;

    } else {

      // server-side error

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      window.alert(errorMessage);
    }

    return throwError(errorMessage);

  }
}

