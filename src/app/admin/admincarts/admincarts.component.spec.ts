import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincartsComponent } from './admincarts.component';

describe('AdmincartsComponent', () => {
  let component: AdmincartsComponent;
  let fixture: ComponentFixture<AdmincartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
