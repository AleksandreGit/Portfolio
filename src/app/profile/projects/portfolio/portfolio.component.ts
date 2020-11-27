import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    window.scrollTo(0, 0);
  }

}
