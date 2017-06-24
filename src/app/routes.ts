import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeHierarchyComponent } from './employee-hierarchy/employee-hierarchy.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'process-employee-hierarchy', component: EmployeeHierarchyComponent},
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
]
