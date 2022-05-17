import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {
  search: string = '';
  inputControl = new FormControl();


  constructor(private searchService: SearchService){
  }

  ngOnInit(): void {
    this.inputDebouncer();
  }


  //prevent input search triggering so quickly
  inputDebouncer(){
    this.inputControl.valueChanges.pipe(
    debounceTime(500),
    switchMap(async (changedValue) => this.searchService.fetchSearch(changedValue)))
    .subscribe();
  }




}
