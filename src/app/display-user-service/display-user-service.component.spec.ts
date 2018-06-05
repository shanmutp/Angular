import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUserServiceComponent } from './display-user-service.component';

describe('DisplayUserServiceComponent', () => {
  let component: DisplayUserServiceComponent;
  let fixture: ComponentFixture<DisplayUserServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUserServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
