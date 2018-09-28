import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestclientComponent } from './components/restclient/restclient.component';
import { HomeComponent } from './components/home/home.component';
import { ResteditComponent } from './components/restclient/restedit/restedit.component';
import { PetclientComponent } from './components/petclient/petclient.component';

@NgModule({
  declarations: [
    AppComponent,
    RestclientComponent,
    HomeComponent,
    ResteditComponent,
    PetclientComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
