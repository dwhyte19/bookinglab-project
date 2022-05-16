import { Component, NgModule, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {
  search: string = '';
  

  constructor(private searchService: SearchService){
  }

  ngOnInit(): void {
  }

  searchServiceListener(){
    this.searchService.data.subscribe((res: any) => {
     // this.Component1Data = res;
    })
  }

  searchChanged(e: any) {
    this.search = e.target.value;

    //send service new search term to fetch
    this.searchService.fetchSearch(this.search);
  }

}
