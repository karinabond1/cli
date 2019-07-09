import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../../../proj72/src/app/data.service";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

    constructor( private http: HttpClient){}

    onSubmitReg(e) {
        console.log(e.value.nameR);
    }

    onSubmitLog(e) {
        console.log(e.value.email);
    }

    ngOnInit(){

    }

}

