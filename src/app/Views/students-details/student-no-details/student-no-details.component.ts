import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../Model/student';
import {StudentService} from '../../../Services/student.service';

@Component({
  selector: '[app-student-no-details]',
  templateUrl: './student-no-details.component.html',
  styleUrls: ['./student-no-details.component.css']
})
export class StudentNoDetailsComponent implements OnInit {

  @Input()
  student: Student;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

  getStudentMean(): number {
    return this.studentService.getMean(this.student.id);
  }
}
