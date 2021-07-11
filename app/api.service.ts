import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { map, tap, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpPostOptions =
    {
      headers:
        new HttpHeaders(
          {
            "Content-Type": "application/json",
          })
    };

  baseUrl: string = 'http://127.0.0.1:8000/'

  public post_api(endpoint, post_data, with_credenttials = false) {

    if (with_credenttials == true) {
      const csrftoken = this.getCookie('csrftoken');
      this.httpPostOptions =
      {
        headers:
          new HttpHeaders(
            {
              "Content-Type": "application/json",
              'X-CSRFToken': csrftoken
            }),
      };
      this.httpPostOptions["withCredentials"] = true;
    }

    return this.httpClient.post<any>(this.baseUrl + endpoint, post_data, this.httpPostOptions);
  }

  get_api() {
    this.httpPostOptions["withCredentials"] = true;
    return this.httpClient.get<any>(this.baseUrl+'invoices/', this.httpPostOptions);
  }

  constructor(private httpClient: HttpClient, private _flashMessagesService: FlashMessagesService, private cookieService: CookieService) { }

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

}
