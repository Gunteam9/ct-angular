import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../Model/student';
import {StudentService} from '../../../Services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input()
  id: number;

  student: Student;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.student = this.studentService.getStudent(this.id);
  }

}
