import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
        //throw error;   //You can also throw the error to a global error handler
      });
  }

  constructor(private httpClient: HttpClient) { }
}
