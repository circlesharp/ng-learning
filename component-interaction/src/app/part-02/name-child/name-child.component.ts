import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.css']
})
export class NameChildComponent implements OnInit {
  @Input()
  get name(): string {
    return this._name
  }
  set name(name: string) {
    this._name = name?.trim() || '<no name set>';
  }
  private _name = '';

  constructor() { }

  ngOnInit(): void {
  }

}
