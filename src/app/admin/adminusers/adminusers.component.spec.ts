import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminusersComponent } from './adminusers.component';

describe('AdminusersComponent', () => {
  let component: AdminusersComponent;
  let fixture: ComponentFixture<AdminusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
