import { Component, OnInit, HostListener } from '@angular/core';
import * as _ from 'lodash';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  currentPanel: any;
  currentIndex: number;
  currentTheme: string;
  pages = data;
  pageKeys: string[];
  private debouncer;

  constructor() {
    this.debouncer = _.debounce((event) => this.debounceScroll(event), 50, {leading: true, trailing: false});
  }

  ngOnInit() {
    this.pageKeys = Object.keys(data);
    this.currentIndex = 0;
    this.setCurrentPanel();
  }

  @HostListener('window:wheel', ['$event']) onScroll(event) {
    this.debouncer(event);
  }

  private getDirection(delta): string {
    return delta > 0 ? 'down' : 'up';
  }

  private debounceScroll(event): void {
    const direction = this.getDirection(event.deltaY);

    if (direction === 'up') {
      this.getPreviousPanel();
    }

    if (direction === 'down') {
      this.getPreviousPanel();
    }
  }

  private getNextPanel(): void {
    if (this.currentIndex === (this.pageKeys.length - 1)) {
      this.currentIndex = 0;
      this.setCurrentPanel();
    } else {
      this.currentIndex = this.currentIndex + 1;
      this.setCurrentPanel();
    }
  }

  private getPreviousPanel(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.pageKeys.length - 1;
      this.setCurrentPanel();
    } else {
      this.currentIndex = this.currentIndex - 1;
      this.setCurrentPanel();
    }
  }

  private setCurrentPanel(): void {
    this.currentPanel = data[this.pageKeys[this.currentIndex]];
    this.currentTheme = this.currentPanel.theme;
  }
}
