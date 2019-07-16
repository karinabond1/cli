import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booker-form',
  templateUrl: './booker-form.component.html',
  styleUrls: ['./booker-form.component.css']
})
export class BookerFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup({
    dateYMD: new FormControl(new Date()),
    dateFull: new FormControl(new Date()),
    dateMDY: new FormControl(new Date()),
    dateRange: new FormControl([new Date(), new Date()])
  });

}
