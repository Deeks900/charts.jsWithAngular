import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey = 'coinranking00af18a26445e742331831d19f7b351d4a32266bf425ae0e';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'aplication/json',
    'X-My-custom-Header': '${apiKey}',
    'Access-Control-Allow-Origin': '*', 
    'x-Requested-with': 'XMLHttpRequest', 
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl= 'https://api.coinranking.com/v2/coins';
  //To hanlde CORS error
  private proxyUrl= 'https://cors-anywhere.herokuapp.com/'
  //Dependency Injection
  constructor(private http: HttpClient) { }

  //Making a get Request
  cryptoData(){
    const url = `${this.proxyUrl}${this.baseUrl}`
    //http already uses observables.
    return this.http.get(url, httpOptions);
  }
}
