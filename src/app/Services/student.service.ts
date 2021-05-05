import { Injectable } from '@angular/core';
import {Student} from '../Model/student';
import {last} from 'rxjs/operators';
import {Notes} from '../Model/notes';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private idCounter: number;
  private students: Student[] = [];

  constructor() { }

  public addStudent(firstName: string, lastName: string, date: string, phone: string, email: string, holder: boolean, notes: Notes[]): void {
    this.students.push(new Student(this.idCounter, firstName, lastName, date, phone, email, holder, notes));
  }

  public removeStudent(id: number): void {
    this.students = this.students.filter(obj => obj !== this.getStudent(id));
  }

  public updateStudent(id: number, firstName: string, lastName: string, date: string, phone: string, email: string, holder: boolean, notes: Notes[]): void {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        this.students[i] = new Student(this.idCounter, firstName, lastName, date, phone, email, holder, notes);
      }
    }
  }

  public getStudent(id: number): Student {
    for (const item of this.students) {
      if (item.id === id) {
        return item;
      }
    }
  }

  public getStudents(): Student[] {
    return this.students;
  }
}
