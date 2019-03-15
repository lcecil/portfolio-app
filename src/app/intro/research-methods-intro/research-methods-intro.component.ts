import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-research-methods-intro',
  templateUrl: './research-methods-intro.component.html',
  styleUrls: ['./research-methods-intro.component.scss']
})
export class ResearchMethodsIntroComponent implements OnInit {
  currentPanel: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPanel = this.route.data;
  }

}
