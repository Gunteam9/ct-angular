import { Component, OnInit } from '@angular/core';
import {Notes} from '../../Model/notes';
import {Student} from '../../Model/student';
import {StudentService} from '../../Services/student.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student;

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


  isSelected: boolean;
  form = new FormGroup({
    student: new FormControl('', Validators.required)
  });


  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    this.isSelected = false;
  }

  public getStudents(): Student[] {
    return this.studentService.getStudents();
  }

  onChangeStudent(e): void {
    const selected = e.target.value;
    if (selected !== '') {
      const idSelected = selected.substr(0, selected.indexOf(':'));

      this.student = this.studentService.getStudent(idSelected);
      this.isSelected = true;

      this.firstName = this.student.firstName;
      this.lastName = this.student.lastName;
      this.date = this.student.date;
      this.phone = this.student.phone;
      this.email = this.student.email;
      this.holder = this.student.holder;

      // C'est moche mais j'ai pas le temps de mieux faire
      for (let i = 0; i < this.student.notes.length; i++) {
        if (this.student.notes[i].name == 'Programmation')
        this.programmation = this.student.notes[i].note;
        if (this.student.notes[i].name == 'Compilation')
          this.compilation = this.student.notes[i].note;
        if (this.student.notes[i].name == 'Complexity')
          this.complexity = this.student.notes[i].note;
        if (this.student.notes[i].name == 'AI')
          this.ai = this.student.notes[i].note;
        if (this.student.notes[i].name == 'English')
          this.english = this.student.notes[i].note;
      }
    }
  }

  updateStudent(): void {
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

    this.studentService.updateStudent(this.student.id, this.firstName, this.lastName, this.date, this.phone, this.email, this.holder, this.notes);
  }
}
