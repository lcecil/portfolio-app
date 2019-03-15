import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss']
})
export class HomeIntroComponent implements OnInit {
  currentPanel: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(val => {
      console.log(val);
      this.currentPanel = val;
    });
  }

}
