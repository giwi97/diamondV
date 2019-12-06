import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminordersComponent } from './adminorders.component';

describe('AdminordersComponent', () => {
  let component: AdminordersComponent;
  let fixture: ComponentFixture<AdminordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
