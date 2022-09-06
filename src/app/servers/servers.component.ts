import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Server Name: "
  serverName = "";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server Name: " + this.serverName;
    this.serverCreated = true;

  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
