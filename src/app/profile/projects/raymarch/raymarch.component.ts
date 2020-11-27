import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-raymarch',
  templateUrl: './raymarch.component.html',
  styleUrls: ['./raymarch.component.css']
})
export class RaymarchComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    window.scrollTo(0, 0);
  }

}
