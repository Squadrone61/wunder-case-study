import { Component, OnInit, Input, SimpleChanges, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-user-age',
  templateUrl: './user-age.component.html',
  styleUrls: ['./user-age.component.scss'],
})
export class UserAgeComponent implements AfterViewInit, OnChanges {

  fillHeight = 10;
  fillscale = 80 / 110;


  _age = 0;
  steps = 5;
  duration = 1000;
  @ViewChild("ageEl") ageEl: ElementRef;


  @Input()
  public set age(v: number) {
    this._age = v;
  }

  constructor() { }

  animateCount() {
    if (typeof this._age === "number") {
      this.counterFunc(this._age, this.duration, this.ageEl);
    }
  }

  counterFunc(endValue, durationMs, element) {
    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue)) + ' yo';

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit() {
    if (this._age) {
      this.animateCount();
    }
    this.getFillHeight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["_age"]) {
      this.animateCount();
    }
  }

  getFillHeight() {
    this.fillHeight = (this._age * this.fillscale) + 10
  }

}
