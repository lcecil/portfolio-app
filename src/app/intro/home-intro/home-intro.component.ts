import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss']
})
export class HomeIntroComponent implements OnInit {
  currentPanel: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPanel = this.route.data;
  }

}
