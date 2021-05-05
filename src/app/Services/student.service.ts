import { Injectable } from '@angular/core';
import {Student} from '../Model/student';
import {last} from 'rxjs/operators';
import {Notes} from '../Model/notes';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private idCounter = 0;
  private students: Student[] = [];

  constructor() {
    const savedData: Student[] = JSON.parse(localStorage.getItem('Students'));

    if (savedData != null && savedData.length > 0) {
      for (let i = 0; i < savedData.length; i++) {
        this.students.push(savedData[i]);
      }
    }
  }

  public addStudent(firstName: string, lastName: string, date: string, phone: string, email: string, holder: boolean, notes: Notes[]): void {
    this.students.push(new Student(this.idCounter, firstName, lastName, date, phone, email, holder, notes));
    this.idCounter++;

    localStorage.setItem('Students', JSON.stringify(this.students));
  }

  public removeStudent(id: number): void {
    this.students = this.students.filter(obj => obj != this.getStudent(id));

    localStorage.setItem('Students', JSON.stringify(this.students));

  }

  public updateStudent(id: number, firstName: string, lastName: string, date: string, phone: string, email: string, holder: boolean, notes: Notes[]): void {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        this.students[i] = new Student(this.idCounter, firstName, lastName, date, phone, email, holder, notes);
      }
    }

    localStorage.setItem('Students', JSON.stringify(this.students));
  }

  public getStudent(id: number): Student {
    for (const item of this.students) {
      if (item.id == id) {
        return item;
      }
    }
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getMean(id: number): number {
    const s = this.getStudent(id);
    let res = 0;
    for (const n of s.notes) {
      res += n.note;
    }
    res /= s.notes.length;
    return res;
  }
}
