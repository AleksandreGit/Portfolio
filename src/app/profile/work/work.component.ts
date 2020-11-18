import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  public apparitionDot(): void{
    console.log('SHOWN !');
  }

}
