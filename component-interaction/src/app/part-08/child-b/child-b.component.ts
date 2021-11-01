import { Component, ContentChild, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {
  @Input() obj!: {name: string};
  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
    console.log('  childB, ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const { currentValue, previousValue } = changes[propName];
      console.log('  childB, ngOnChanges', currentValue, previousValue);
    }
  }

}
