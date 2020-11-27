import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-thurston',
  templateUrl: './thurston.component.html',
  styleUrls: ['./thurston.component.css']
})
export class ThurstonComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    window.scrollTo(0, 0);
  }

}
