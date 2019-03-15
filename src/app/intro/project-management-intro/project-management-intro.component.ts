import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-management-intro',
  templateUrl: './project-management-intro.component.html',
  styleUrls: ['./project-management-intro.component.scss']
})
export class ProjectManagementIntroComponent implements OnInit {
  currentPanel: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPanel = this.route.data;
  }

}
