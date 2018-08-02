import { Component, OnInit, HostListener } from '@angular/core';
import { Observable, Subject, of} from 'rxjs';
import { throttle, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  selectedClass: string;
  scrollSubject: Subject<any>;
  scrollObservable: Observable<any>;
  lastEvent = null;
  isIncreasing = false;

  constructor() {
    this.scrollSubject = new Subject<any>();
    this.scrollObservable = this.scrollSubject.asObservable().pipe(throttleTime(500));
  }

  ngOnInit() {
    this.selectedClass = 'home-theme';
    this.scrollObservable.subscribe(val => console.log(val));
  }

  @HostListener('window:wheel', ['$event']) onScroll($event) {
    this.scrollSubject.next($event);
  }

  // TODO figure this out, mostly copied from github code.
  private changePanel(event): void {

    if (this.lastEvent === null) {
      this.getDirection(event.deltaY);
      this.isIncreasing = true;
    } else {
      const isGreaterVelocity = Math.abs(event.deltaY) > Math.abs(this.lastEvent.deltaY);

      if (isGreaterVelocity && !this.isIncreasing) {
        this.getDirection(event.deltaY);
      }

      this.isIncreasing = isGreaterVelocity;
    }

    this.lastEvent = event;
  }

  private getDirection(delta): number {
    return delta > 0 ? 1 : -1;
  }
}
