import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() name = "";
  @Output() voted = new EventEmitter<boolean>();

  didVote = false;

  constructor() { }

  ngOnInit(): void {
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
