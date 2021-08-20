import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  sub: Subscription;

  constructor() {}
  @ViewChild('clickBtn') clickBtn: ElementRef;

  ngOnInit() {
    const intervalNumber = interval(1000);
    this.sub = intervalNumber.subscribe(x => {
      console.log('Next: ', x);
      if (x > 5) {
        this.sub.unsubscribe();
      }
      this.addStream(x, 'container1');
    });
  }
  addStream(value, id) {
    let el = document.createElement('li');
    el.classList.add('list-group-item');
    el.innerText = value;
    document.getElementById(id).appendChild(el);
  }
}
