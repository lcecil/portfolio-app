import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchMethodsIntroComponent } from './research-methods-intro.component';

describe('ResearchMethodsIntroComponent', () => {
  let component: ResearchMethodsIntroComponent;
  let fixture: ComponentFixture<ResearchMethodsIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchMethodsIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchMethodsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
