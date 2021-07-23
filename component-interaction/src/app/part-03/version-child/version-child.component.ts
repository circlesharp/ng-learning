import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnInit, OnChanges {
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const log: Array<string> = [];
    for (const propName in changes) {
      const changedProp: SimpleChange = changes[propName];
      const from = JSON.stringify(changedProp.previousValue)
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }

    this.changeLog.push(log.join(', '));
  }

}
