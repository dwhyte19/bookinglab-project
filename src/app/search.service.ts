import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  data = new Subject();

  constructor(private httpClient: HttpClient) {
  }


  public fetchSearch(term: string){

    return this.httpClient.get(`https://api.unsplash.com/search/photos?page=1&query=${term}`)
    .subscribe((res)=>{
      this.data.next(res);
      console.log(this.data)
    });

    //https://api.unsplash.com/search/photos?page=1&query=office
  }


}
