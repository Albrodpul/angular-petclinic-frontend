import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResteditComponent } from './restedit.component';

describe('ResteditComponent', () => {
  let component: ResteditComponent;
  let fixture: ComponentFixture<ResteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
