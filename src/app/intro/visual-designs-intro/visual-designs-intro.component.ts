import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visual-designs-intro',
  templateUrl: './visual-designs-intro.component.html',
  styleUrls: ['./visual-designs-intro.component.scss']
})
export class VisualDesignsIntroComponent implements OnInit {
  currentPanel: Observable<any>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentPanel = this.route.data;
  }

}
