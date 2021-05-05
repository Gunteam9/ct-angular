import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNoDetailsComponent } from './student-no-details.component';

describe('StudentNoDetailsComponent', () => {
  let component: StudentNoDetailsComponent;
  let fixture: ComponentFixture<StudentNoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
