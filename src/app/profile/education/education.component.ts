import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  private observer: IntersectionObserver;

  constructor() {
    this.observer = new IntersectionObserver(observables => {
      observables.forEach(observ => {
        if (observ.intersectionRatio > 0) {
          observ.target.classList.remove('not-visible');
        }
        else{
          observ.target.classList.add('not-visible');
        }
      });
    });
  }

  ngOnInit(): void {
    const itemsLeft = document.querySelectorAll('.info-left-animate');
    itemsLeft.forEach(item => {
      item.classList.add('not-visible');
      this.observer.observe(item);
    });

    const itemsRight = document.querySelectorAll('.info-right-animate');
    itemsRight.forEach(item => {
      item.classList.add('not-visible');
      this.observer.observe(item);
    });
  }

}
