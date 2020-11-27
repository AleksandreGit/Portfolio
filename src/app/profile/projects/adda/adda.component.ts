import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-adda',
  templateUrl: './adda.component.html',
  styleUrls: ['./adda.component.css']
})
export class AddaComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    window.scrollTo(0, 0);
  }

}
