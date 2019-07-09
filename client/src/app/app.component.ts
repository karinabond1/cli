import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataService} from "../../../proj72/src/app/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    constructor(private http: HttpClient){}

    title = 'client';
    ngOnInit(){
        return true;
    }
}
