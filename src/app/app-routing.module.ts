import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'home', component: HomeComponent
}, {
  path: 'students', component: StudentComponent
}, {
  path: 'students/:id', component: StudentDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

