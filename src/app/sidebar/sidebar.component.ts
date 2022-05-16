import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../image/image.component';
import { PreviewService } from '../preview.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  term = "";
  count = 0;
  images: Array<ImageComponent> = [];

  constructor(private searchService: SearchService, private previewService: PreviewService) {
    this.searchServiceListener();

  }

  ngOnInit(): void {
  }


  searchServiceListener(){
    this.searchService.data.subscribe((res: any) => {
      console.log(res);
      this.images = res;
      this.term = this.searchService.resultsTerm;
      this.count = this.searchService.resultsCount;
    })
  }


  changeImage(image: ImageComponent){
    this.previewService.changeImage(image);
  }

}
