import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestclientComponent } from './components/restclient/restclient.component';
import { ResteditComponent } from './components/restclient/restedit/restedit.component';
import { PetclientComponent } from './components/petclient/petclient.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restclient', component: RestclientComponent },
  { path: 'restclient/:id' , component: ResteditComponent },
  { path: 'petclient', component: PetclientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
