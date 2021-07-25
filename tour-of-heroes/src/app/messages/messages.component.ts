import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    // * must be public, cuz you're gonna bind to it in the template.
    public messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

}
