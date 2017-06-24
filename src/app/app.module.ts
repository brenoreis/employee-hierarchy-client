import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';
import { HeaderComponent } from './header/header.component';
import { EmployeeHierarchyComponent } from './employee-hierarchy/employee-hierarchy.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmployeeComponent } from './employee-hierarchy/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeeHierarchyComponent,
    EmployeeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
