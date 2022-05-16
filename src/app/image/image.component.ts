import { Component, Inject, OnInit } from '@angular/core';

export interface ImageComponent {

     id?: string,
     url?: string,
     thumbnail?: string,
     download?: string,
     name?:string,   
     description?: string,
     blur?: string
}
