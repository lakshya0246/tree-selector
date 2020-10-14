import { Component } from '@angular/core';
import { RESPONSE } from './response.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selected: string;
  locations = RESPONSE;
}
