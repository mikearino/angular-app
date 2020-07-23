import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // Only use three lines of code, if not then you will need an external file
  template: `<app-server></app-server> <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
