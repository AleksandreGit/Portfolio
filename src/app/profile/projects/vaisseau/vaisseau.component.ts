import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vaisseau',
  templateUrl: './vaisseau.component.html',
  styleUrls: ['./vaisseau.component.css']
})
export class VaisseauComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    window.scrollTo(0, 0);
  }

}
