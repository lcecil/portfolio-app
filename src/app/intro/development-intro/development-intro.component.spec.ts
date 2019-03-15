import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentIntroComponent } from './development-intro.component';

describe('DevelopmentIntroComponent', () => {
  let component: DevelopmentIntroComponent;
  let fixture: ComponentFixture<DevelopmentIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
