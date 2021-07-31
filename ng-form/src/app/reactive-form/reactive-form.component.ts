import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // a form control instance / form model
  // link to the view through formControl directive
  favoriteColorControl = new FormControl('reactive');

  constructor() { }

  ngOnInit(): void {
  }

}
