import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {NewStudentComponent} from './Views/new-student/new-student.component';
import {UpdateStudentComponent} from './Views/update-student/update-student.component';
import {RemoveStudentComponent} from './Views/remove-student/remove-student.component';
import {StudentsDetailsComponent} from './Views/students-details/students-details.component';

const routes: Routes = [
  {path: '', component: StudentsDetailsComponent},
  {path: 'NewStudent', component: NewStudentComponent},
  {path: 'UpdateStudent', component: UpdateStudentComponent},
  {path: 'RemoveStudent', component: RemoveStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
