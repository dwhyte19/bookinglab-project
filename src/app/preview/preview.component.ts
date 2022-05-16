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

  constructor(private previewService: PreviewService, private downloadsService: DownloadsService) { 
    this.previewServiceListener();
  }

  ngOnInit(): void {
  }

  previewServiceListener(){
    this.previewService.data.subscribe((res: any) => {
      console.log(res);
      this.image = res;
      this.massive = "LOADING...";
    })
  }


  //download image using component
  downloadImage(image: ImageComponent){
    this.downloadsService.downloadImage(image)
    .subscribe(blob => {

      var binaryData = [];
      binaryData.push(blob);

      const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(new Blob(binaryData, {type: "image/jpeg"}));
        a.href = objectUrl;
        a.download = 'image.jpg';
        a.click();
        URL.revokeObjectURL(objectUrl);
      });
  }

}
