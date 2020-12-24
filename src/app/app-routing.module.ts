import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path : '', component : HomeComponent },
{path : 'patient-details', component : PatientDetailsComponent},
{path : 'update', component : UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
