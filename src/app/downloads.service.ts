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


  public downloadImage(image: ImageComponent){

    var self = this; 
    if(image.url){
      new JsFileDownloader({ 
        url: image.url,
      })
      .then(function (this: typeof DownloadsService) {
        self.statusMsg = "Download Completed";
        self.data.next(self.statusMsg);
        // Called when download ended
      })
      .catch(function (error) {
        self.statusMsg = "Download Failed";
        self.data.next(self.statusMsg);
        // Called when an error occurred
      });
    }

  }


  public process (event: ProgressEvent) {
    if (!event.lengthComputable) return; // guard
    var downloadingPercentage = Math.floor(event.loaded / event.total * 100);
    // what to do ...
  };

}
