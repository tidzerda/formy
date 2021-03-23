import { Component, OnInit } from '@angular/core';
import { Conversion } from './components/comps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'formy';
  conv: Conversion;

  getOptions() {
    return this.conv.options;
  }


  ngOnInit() {
    this.conv = new Conversion();
    
  }
  
}
