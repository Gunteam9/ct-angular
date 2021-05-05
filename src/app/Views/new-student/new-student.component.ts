import { Component, OnInit } from '@angular/core';
import {Notes} from '../../Model/notes';
import {StudentService} from '../../Services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  firstName: string;
  lastName: string;
  date: string;
  phone: string;
  email: string;
  holder: boolean;
  notes: Notes[] = [];

  programmation: number;
  compilation: number;
  complexity: number;
  ai: number;
  english: number;

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

  createNewStudent(): void {
    if (this.programmation != null) {
      this.notes.push(new Notes('Programmation', this.programmation));
    }
    if (this.compilation != null) {
      this.notes.push(new Notes('Compilation', this.compilation));
    }
    if (this.complexity != null) {
      this.notes.push(new Notes('Complexity', this.complexity));
    }
    if (this.ai != null) {
      this.notes.push(new Notes('AI', this.ai));
    }
    if (this.english != null) {
      this.notes.push(new Notes('English', this.english));
    }

    this.studentService.addStudent(this.firstName, this.lastName, this.date, this.phone, this.email, this.holder, this.notes);
  }
}
