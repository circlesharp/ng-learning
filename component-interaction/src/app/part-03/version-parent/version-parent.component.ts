import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
  styleUrls: ['./version-parent.component.css']
})
export class VersionParentComponent implements OnInit {
  major = 1;
  minor = 23;

  constructor() { }

  ngOnInit(): void {
  }

  newMinor() {
    this.minor += 1;
  }

  newMajor() {
    this.major += 1;
    this.minor = 0;
  }
}
