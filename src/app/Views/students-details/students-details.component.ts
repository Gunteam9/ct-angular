import { Component, OnInit } from '@angular/core';
import {Student} from '../../Model/student';
import {StudentService} from '../../Services/student.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {

  students: Student[] = [];

  constructor(public studentService: StudentService) {
    this.students = studentService.getStudents();
  }

  ngOnInit(): void {
  }

}
