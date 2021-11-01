import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildAComponent } from '../child-a/child-a.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('childA') viewChildA!: ChildAComponent;
  @ViewChild('inputB') viewInputB!: ElementRef;


  public obj!: {name: string};
  public items!: Array<number>;

  constructor() { 
    // this.genObj();
  }


  ngOnInit(): void {
    console.log('parent, ngOnInit', this.viewChildA);
    this.genObj();
    this.genItems();
  }

  ngAfterViewInit() {
    console.log(
      'parent, ngAfterViewInit',
      this.viewChildA, // Component
      this.viewInputB, // ElementRef: { nativeElement }
    )

    this.viewInputB.nativeElement.focus();
  }

  private genObj() {
    this.obj = {name: 'tom'};
  }

  private genItems() {
    this.items = Array(10).fill(null).map((_, idx) => idx);
  }

}
