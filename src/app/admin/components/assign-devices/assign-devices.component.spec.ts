import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDevicesComponent } from './assign-devices.component';

describe('AssignDevicesComponent', () => {
  let component: AssignDevicesComponent;
  let fixture: ComponentFixture<AssignDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignDevicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
