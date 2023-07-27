import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/login/login.component';
import { NavComponent } from './componenets/nav/nav.component';
import { RegisterComponent } from './componenets/register/register.component';
import { FormControl, FormGroup, Validators, FormsModule,ReactiveFormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
