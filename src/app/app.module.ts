import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewStudentComponent } from './Views/new-student/new-student.component';
import { StudentsDetailsComponent } from './Views/students-details/students-details.component';
import { UpdateStudentComponent } from './Views/update-student/update-student.component';
import { RemoveStudentComponent } from './Views/remove-student/remove-student.component';
import {RouterModule} from '@angular/router';
import {StudentService} from './Services/student.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { StudentNoDetailsComponent } from './Views/students-details/student-no-details/student-no-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NewStudentComponent,
    StudentsDetailsComponent,
    UpdateStudentComponent,
    RemoveStudentComponent,
    StudentNoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
