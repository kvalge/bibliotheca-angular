import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingReportComponent } from './lending-report.component';

describe('LendingRaportComponent', () => {
  let component: LendingReportComponent;
  let fixture: ComponentFixture<LendingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LendingReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LendingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
