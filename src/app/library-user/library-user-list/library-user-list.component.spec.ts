import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryUserListComponent } from './library-user-list.component';

describe('LibraryUserListComponent', () => {
  let component: LibraryUserListComponent;
  let fixture: ComponentFixture<LibraryUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
