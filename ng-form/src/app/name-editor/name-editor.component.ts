import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  public name = new FormControl(''); // generate a new FormControl

  constructor() {}

  ngOnInit(): void {
    this.name.valueChanges.subscribe(console.log);
  }

  public updateName() {
    this.name.setValue('Nancy');
  }
}
