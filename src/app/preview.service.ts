import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageComponent } from './image/image.component';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  data = new Subject();
  headers = new Headers();
  private previewImage: ImageComponent = {};

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Client-ID ' + 'ht3yzBArA1OM--GTDK0ISXGVeY68yN9JizpRI5A6TXk'
    })
  }


  constructor(private httpClient: HttpClient) { 
  }


  //change preview image using existing object
  public changeImage(image: ImageComponent){
    this.previewImage = image;
    this.data.next(this.previewImage);
  }

  
  //fetch image by id for internal shared links
  public fetchImageById(id : string){

    this.httpClient.get(`https://api.unsplash.com/photos/${id}`, this.httpOptions)
    .subscribe((res: any)=>{

      if(res){
        let newImage: ImageComponent  = {id: res.id, url: res.urls.full, name: res.user.username, description: res.description, blur: res.blur_hash};
        this.previewImage = newImage;
      }

      this.data.next(this.previewImage);

      console.log(this.data);
      console.log(this.previewImage)

      return this.previewImage;
      
    });
  }

}
