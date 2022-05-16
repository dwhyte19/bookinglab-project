import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  auth_token: string = "asasa21212....";
  data = new Subject();
  headers = new Headers();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Client-ID ' + 'ht3yzBArA1OM--GTDK0ISXGVeY68yN9JizpRI5A6TXk'
    })
  }


  constructor(private httpClient: HttpClient) {
  }


  public fetchSearch(term: string){

    return this.httpClient.get(`https://api.unsplash.com/search/photos?page=1&query=${term}`, this.httpOptions)
    .subscribe((res)=>{
      this.data.next(res);
      console.log(this.data)
    });

    //https://api.unsplash.com/search/photos?page=1&query=office
  }


}
