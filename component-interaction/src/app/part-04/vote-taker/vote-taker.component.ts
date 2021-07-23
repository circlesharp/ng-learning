import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  constructor() { }

  ngOnInit(): void {
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed += 1 : this.disagreed += 1;
  }
}
