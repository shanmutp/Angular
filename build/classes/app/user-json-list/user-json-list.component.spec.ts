import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJsonListComponent } from './user-json-list.component';

describe('UserJsonListComponent', () => {
  let component: UserJsonListComponent;
  let fixture: ComponentFixture<UserJsonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserJsonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserJsonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
