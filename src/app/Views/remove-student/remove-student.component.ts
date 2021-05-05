import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../Model/student';
import {StudentService} from '../../Services/student.service';

@Component({
  selector: 'app-remove-student',
  templateUrl: './remove-student.component.html',
  styleUrls: ['./remove-student.component.css']
})
export class RemoveStudentComponent implements OnInit {

  student: Student;

  form = new FormGroup({
    student: new FormControl('', Validators.required)
  });


  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }


  onChangeStudent(e): void {
    const selected = e.target.value;
    if (selected !== '') {
      const idSelected = selected.substr(0, selected.indexOf(':'));

      this.student = this.studentService.getStudent(idSelected);
    }
  }

  deleteStudent(): void {
    if (this.student != null) {
      this.studentService.removeStudent(this.student.id);
    }
  }

  getStudents(): Student[] {
    return this.studentService.getStudents();
  }
}
