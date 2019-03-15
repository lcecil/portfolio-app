import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  currentIndex: number;
  currentTheme: string;
  pageKeys: string[];
  private debouncer;

  constructor(private router: Router) {
    this.debouncer = _.debounce((event) => this.debounceScroll(event), 50, {leading: true, trailing: false});
  }

  ngOnInit() {
    this.currentIndex = 0;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentTheme = event.url.replace('/', '').concat('-theme');
      }
    });
    this.pageKeys = this.router.config
      .map(route => route.path)
      .filter(string => string !== '');
  }

  @HostListener('window:wheel', ['$event']) onScroll(event) {
    this.debouncer(event);
  }

  @HostListener('window:keyup', ['$event']) onKeyUp(event) {
    if (event.key === 'ArrowUp') {
      this.getPreviousPanel();
    }

    if (event.key === 'ArrowDown') {
      this.getNextPanel();
    }
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
      this.router.navigateByUrl(this.pageKeys[this.currentIndex]);
    } else {
      this.currentIndex = this.currentIndex + 1;
      this.router.navigateByUrl(this.pageKeys[this.currentIndex]);
    }
  }

  private getPreviousPanel(): void {
    if (this.currentIndex === 0) {
      this.currentIndex = this.pageKeys.length - 1;
      this.router.navigateByUrl(this.pageKeys[this.currentIndex]);

    } else {
      this.currentIndex = this.currentIndex - 1;
      this.router.navigateByUrl(this.pageKeys[this.currentIndex]);
    }
  }

}
