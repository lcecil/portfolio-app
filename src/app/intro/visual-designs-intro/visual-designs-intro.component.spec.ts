import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDesignsIntroComponent } from './visual-designs-intro.component';

describe('VisualDesignsIntroComponent', () => {
  let component: VisualDesignsIntroComponent;
  let fixture: ComponentFixture<VisualDesignsIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualDesignsIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDesignsIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
