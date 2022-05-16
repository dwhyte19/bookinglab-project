import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { ImageComponent } from './image/image.component';

@Injectable({
  providedIn: 'root'
})
export class DownloadsService {

  data = new Subject();
  headers = new Headers();
  private downloads: ImageComponent[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'image/jpeg',
      'Authorization': 'Client-ID ' + 'ht3yzBArA1OM--GTDK0ISXGVeY68yN9JizpRI5A6TXk'
    })
  }


  constructor(private httpClient: HttpClient) { 
  }


  public downloadImage(image: ImageComponent): Observable<any>{

    if(image && image.url){
      return this.httpClient.get(image.url, { responseType: 'blob', observe: 'response' });
    }
    return EMPTY;

    //https://api.unsplash.com/search/photos?page=1&query=office

  }

}
