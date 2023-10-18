import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path:'' , redirectTo:'/departments', pathMatch:'full'},
  {path:'departments' , component:DepartmentListComponent},
  {path:'departments/:id' , 
  component:DepartmentDetailsComponent,
  children:[
    { path:'overview',component:DepartmentOverviewComponent},
    { path:'contact' , component:DepartmentContactComponent}
  ]
},
  {path:'employees' , component:EmployeeListComponent},
  {path:"**" , component:PageNotFindComponent}  //wildcard routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//now as we imported departmentlist and employeelist 
//component in both app-module and app-routing-module 
//so that will be duplication so we export the components
//that we need here and import it in app-module like:

export const routingComponents=[DepartmentListComponent,
                                EmployeeListComponent,
                                PageNotFindComponent,
                                DepartmentDetailsComponent,
                                DepartmentOverviewComponent,
                                DepartmentContactComponent
                              ]

