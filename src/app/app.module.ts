import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PagerService } from './_services/pager.service'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        Ng2SearchPipeModule,
         Ng2OrderModule, 
         NgxPaginationModule,
         FormsModule     
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        PagerService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
