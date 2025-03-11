import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeListComponent } from './college-list/college-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/colleges', pathMatch: 'full' },
  { path: 'colleges', component: CollegeListComponent },
  { path: 'departments/:collegeId', component: DepartmentListComponent },
  { path: 'batches/:id', component: BatchListComponent },
  { path: 'students/:batchId', component: StudentListComponent },
  { path: 'student/:id', component: StudentDetailComponent },
  { path: 'upload', component: FileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
