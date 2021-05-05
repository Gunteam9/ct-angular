import {Notes} from './notes';

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  date: string;
  phone: string;
  email: string;
  holder: boolean;
  notes: Notes[] = [];

  constructor(id: number, firstName: string, lastName: string, date: string, phone: string, email: string, holder: boolean, notes: Notes[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.date = date;
    this.phone = phone;
    this.email = email;
    this.holder = holder;
    this.notes = notes;
  }
}
