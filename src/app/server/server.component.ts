import { Component } from '@angular/core';

// @Component is a decorator
@Component({
  // selector is how a tag, so that you can use it in HTML template
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
}
