import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import JsFileDownloader from 'js-file-downloader';
import { EMPTY, Observable, Subject } from 'rxjs';
import { ImageComponent } from './image/image.component';

@Injectable({
  providedIn: 'root'
})
export class DownloadsService {

  data = new Subject();
  headers = new Headers();
  public statusMsg: string = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'image/jpeg',
      'Authorization': 'Client-ID ' + 'ht3yzBArA1OM--GTDK0ISXGVeY68yN9JizpRI5A6TXk'
    })
  }


  constructor(private httpClient: HttpClient) { 
  }


  //download image and track progress
  public downloadImage(image: ImageComponent){

    var self = this; 
    if(image.url){
      self.statusMsg = "Downloading...";
      self.data.next(self.statusMsg);
      new JsFileDownloader({ 
        url: image.url,
        nameCallback: function(name) {
          return name + ".jpg";
        }
      })
      .then(function (this: typeof DownloadsService) {
        self.statusMsg = "Download Completed";
        self.data.next(self.statusMsg);
      })
      .catch(function (error) {
        self.statusMsg = "Download Failed";
        self.data.next(self.statusMsg);
      });
    }

  }


  //this is supposed to track the progress in more detail (as percentage), but was causing issues.
  public process (event: ProgressEvent) {
    if (!event.lengthComputable) return;
    var percentComplete = Math.floor(event.loaded / event.total * 100);
  };

}
