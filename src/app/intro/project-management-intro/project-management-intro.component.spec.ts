import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementIntroComponent } from './project-management-intro.component';

describe('ProjectManagementIntroComponent', () => {
  let component: ProjectManagementIntroComponent;
  let fixture: ComponentFixture<ProjectManagementIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagementIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
