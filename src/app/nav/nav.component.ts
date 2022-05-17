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


  //send service new search term to fetch
  searchChanged(e: any) {
    this.search = e.target.value;
    this.searchService.fetchSearch(this.search);
  }

}
