import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationArchitectureIntroComponent } from './information-architecture-intro.component';

describe('InformationArchitectureIntroComponent', () => {
  let component: InformationArchitectureIntroComponent;
  let fixture: ComponentFixture<InformationArchitectureIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationArchitectureIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationArchitectureIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
