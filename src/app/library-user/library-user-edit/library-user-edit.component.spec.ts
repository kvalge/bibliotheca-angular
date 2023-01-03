import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryUserEditComponent } from './library-user-edit.component';

describe('LibraryUserEditComponent', () => {
  let component: LibraryUserEditComponent;
  let fixture: ComponentFixture<LibraryUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryUserEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
