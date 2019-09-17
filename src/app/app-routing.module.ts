import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  {path:'',component:DashboardComponent  },
  {path:'patients',component:PatientsComponent  },
  {path:'reports',component:ReportsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
