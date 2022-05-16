import { Component, OnInit } from '@angular/core';
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

  constructor(private previewService: PreviewService) { 
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

}
