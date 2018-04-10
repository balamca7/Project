import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';

import { PagerService } from './_services/pager.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  filter = '';
    //initializing p to one
  p: number = 1;
   constructor(private http: Http, private pagerService: PagerService) { }
 
    // array of all items to be paged
    private allItems: any[];
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];
 
    ngOnInit() {
        // get dummy data
        this.http.get('./assets/dummy-data.json')
            .map((response: Response) => response.json())
            .subscribe(data => {
                // set items to json response
                this.allItems = data;
 
                // initialize to page 1
                this.setPage(1);
            });
    }
 
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

     //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


}
