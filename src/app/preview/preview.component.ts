import { Component, OnInit } from '@angular/core';
import { DownloadsService } from '../downloads.service';
import { ImageComponent } from '../image/image.component';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  image: ImageComponent = {};
  massive: string = "WELCOME";
  downloadMsg: string = "Download";

  constructor(private previewService: PreviewService, private downloadsService: DownloadsService) { 
    this.previewServiceListener();
    this.downloadServiceListener();
  }

  ngOnInit(): void {
  }

  previewServiceListener(){
    this.previewService.data.subscribe((res: any) => {
      //console.log(res);
      this.image = res;
      this.massive = "LOADING...";
      this.downloadMsg = "Download";
    })
  }


  downloadServiceListener(){
    this.downloadsService.data.subscribe((res: any) => {
      //console.log(res);
      this.downloadMsg = this.downloadsService.statusMsg;
    })
  }



  //download image using component
  downloadImage(image: ImageComponent){
    this.downloadsService.downloadImage(image);
  }

}
