import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 HTTP_OPTIONS: any = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  baseUrl: string = 'http://127.0.0.1:8000'
  
  public post_api(endpoint, post_data){
    this.httpClient.post(this.baseUrl+endpoint, post_data, this.HTTP_OPTIONS).subscribe(data => {
        return data; 
      },
      (error) => {                              //Error callback
        console.error('error caught in component')
        this._flashMessagesService.show('Failed to login', { cssClass: 'alert-danger', timeout: 5000 });
        return false
        //throw error;   //You can also throw the error to a global error handler
      });
  }

  constructor(private httpClient: HttpClient, private _flashMessagesService: FlashMessagesService) { }
}
