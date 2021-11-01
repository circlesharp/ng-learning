import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
  @ContentChild('contentA') contentA!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // console.log('childA, ngOnInit');
    
  }

  ngAfterContentInit() {
    console.log('  childA, ngAfterContentInit', this.contentA);   
  }

}
