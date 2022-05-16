import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  id: number = 0;
  url: string = "";
  name: string = "";
  description: string = "";  

  constructor() { }

  ngOnInit(): void {
  }

}
