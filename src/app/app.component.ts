import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  selectedClass: string;

  constructor() {
  }

  ngOnInit() {
    this.selectedClass = 'home-theme';
  }

  @HostListener('window:wheel', ['$event']) onScroll($event) {
    console.log('scrolling..');
  }
}
