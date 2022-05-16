import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ImageComponent } from './image/image.component';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public resultsTerm = "";
  public resultsCount = 0;

  data = new Subject();
  headers = new Headers();
  private images: ImageComponent[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Client-ID ' + 'ht3yzBArA1OM--GTDK0ISXGVeY68yN9JizpRI5A6TXk'
    })
  }


  constructor(private httpClient: HttpClient) {
  }


  public fetchSearch(term: string){

    this.httpClient.get(`https://api.unsplash.com/search/photos?page=1&query=${term}`, this.httpOptions)
    .subscribe((res: any)=>{

        for(let item of res.results) {

          let newImage: ImageComponent  = {id: item.id, url: item.urls.regular, thumbnail: item.urls.thumb, download: item.links.download_location, name: item.user.username, description: item.description, blur: item.blur_hash};
          this.images.push(newImage);
        }

        this.resultsTerm = term;
        this.resultsCount = res.total;
        this.data.next(this.images);

      console.log(this.data);
      console.log(this.images)

      return this.images;
    
    });

    //https://api.unsplash.com/search/photos?page=1&query=office
  }


}
