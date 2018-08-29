import { Component, OnInit, HostListener } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  selectedClass: string;
  panels = [
    {
      panel: 'ux design'
    },
    {
      panel: 'information architecture'
    },
    {
      panel: 'research methods'
    },
    {
      panel: 'visual designs'
    },
    {
      panel: 'project management'
    },
    {
      panel: 'front-end development'
    },
  ];
  content: any;
  private debouncer;

  constructor() {
    this.debouncer = _.debounce((event) => this.debounceScroll(event), 100, {leading: true, trailing: false});
  }

  ngOnInit() {
    this.selectedClass = 'home-theme';
    this.content = this.panels[0];
    // this.setUpScrollObservable();
  }

  @HostListener('window:wheel', ['$event']) onScroll(event) {
    this.debouncer(event);
  }

  private getDirection(delta): string {
    return delta > 0 ? 'down' : 'up';
  }

  private debounceScroll(event): void {
    // TODO something fishy is happening, where you have to click in the window to get it to fire again
    const direction = this.getDirection(event.deltaY);
    const index = this.panels.indexOf(this.content);
    if (direction === 'up') {
      if (index === this.panels.length - 1) {
        this.content = this.panels[0];
      } else {
        this.content = this.panels[index + 1];
      }
    }

    if (direction === 'down') {
      if (index === 0) {
        this.content = this.panels[this.panels.length - 1];
      } else {
        this.content = this.panels[index - 1];
      }
    }
  }
}
