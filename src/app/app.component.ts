import { Component } from '@angular/core';

// This is what is used in the main index.html file where the app-root tag is
// in the body.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {}
