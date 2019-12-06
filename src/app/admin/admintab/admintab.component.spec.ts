import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintabComponent } from './admintab.component';

describe('AdmintabComponent', () => {
  let component: AdmintabComponent;
  let fixture: ComponentFixture<AdmintabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
