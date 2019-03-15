import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-information-architecture-intro',
  templateUrl: './information-architecture-intro.component.html',
  styleUrls: ['./information-architecture-intro.component.scss']
})
export class InformationArchitectureIntroComponent implements OnInit {
  currentPanel: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPanel = this.route.data;
  }

}
