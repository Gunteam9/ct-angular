import { Injectable } from '@angular/core';
import {Student} from '../Model/student';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  public addNote(student: Student, name: string, note: number): void {

  }
}
