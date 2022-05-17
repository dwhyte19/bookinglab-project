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
  subtitle: string = "Enter your image search above";
  downloadMsg: string = "Download";
  showShare: boolean = false;
  shareUrl = "";


  constructor(private previewService: PreviewService, private downloadsService: DownloadsService) { 
    this.sharedImageChecker();
    this.previewServiceListener();
    this.downloadServiceListener();
  }

  ngOnInit(): void {
  }


  //handle shared url param and load image
  sharedImageChecker(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const imageId = urlParams.get('share')

    if(imageId){
      this.previewService.fetchImageById(imageId);
    }
  }


  //listen to preview service changes
  previewServiceListener(){
    this.previewService.data.subscribe((res: any) => {
      this.image = res;
      this.subtitle = "";
      this.massive = "LOADING...";
      this.downloadMsg = "Download";
      this.showShare = false;
    })
  }


  //listen to download service changes
  downloadServiceListener(){
    this.downloadsService.data.subscribe((res: any) => {
      this.downloadMsg = this.downloadsService.statusMsg;
    })
  }


  //download image using component
  downloadImage(image: ImageComponent){
    this.downloadsService.downloadImage(image);
  }


  //share image with others
  shareImage(){
    this.shareUrl = window.location.origin + "?share=" + this.image.id
    this.showShare = true;
  }

}
