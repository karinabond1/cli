import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {initDayOfMonth} from "ngx-bootstrap/chronos/units/day-of-month";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Room } from './room.module';
import { catchError } from 'rxjs/operators'; 
import { throwError } from "rxjs";

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    public date = moment();

    public dateForm: FormGroup;

    public daysArr;

    public rooms: Room[];

    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.initDateForm();
    }

    public initDateForm(){
        return this.dateForm = this.fb.group({
            dateFrom: [null, Validators.required],
            dateTo: [null, Validators.required]
        });
    }

    public ngOnInit() {
        this.daysArr = this.createCalender(this.date);
        this.getRooms().subscribe(data => this.rooms = data);
    }

    public todayCheck(day){
        if(!day){
            return false;
        }
        return moment().format('L') === day.format('L');
    }

    createCalender(month) {
        let firstDay = moment(month).startOf('M');
        let days = Array.apply(null, {length: month.daysInMonth()})
            .map(Number.call, Number)
            .map((n) => {
                return moment(firstDay).add(n, 'd');
            });
        for (let n = 0; n < firstDay.weekday(); n++) {
            days.unshift(null);
        }
        return days;
    }

    public nextMonth(){
        this.date.add(1,'M');
        this.daysArr=this.createCalender(this.date);
    }

    public prevMonth(){
        this.date.subtract(1,'M');
        this.daysArr=this.createCalender(this.date);
    }


    public selectedDate(day){
        let dayFormated = day.format('MM/DD/YYYY');
        if(this.dateForm.valid){
            this.dateForm.setValue({dateFrom: null, dateTo:null})
        }
        if(!this.dateForm.get('dateFrom').value){
            this.dateForm.get('dateFrom').patchValue(dayFormated);
        }else{
            this.dateForm.get('dateTo').patchValue(dayFormated);
        }
    }

    public getRooms(){
        return this.http.get<Room[]>('http://192.168.0.15/~user14/BOARDROOM_BOOKER/server/api/calendar/rooms/')
        .pipe(
            catchError(this.handleError)
          );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError(
          'Something bad happened; please try again later.');
    };
}
