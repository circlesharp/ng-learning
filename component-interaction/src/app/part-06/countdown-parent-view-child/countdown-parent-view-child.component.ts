import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from 'src/app/part-05/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-view-child',
  templateUrl: './countdown-parent-view-child.component.html',
  styleUrls: ['./countdown-parent-view-child.component.css']
})
export class CountdownParentViewChildComponent implements OnInit, AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.seconds = () => this.timerComponent.seconds;
    }, 0);
  }

  start() {
    this.timerComponent.start();
  }

  stop() {
    this.timerComponent.stop();
  }
}
