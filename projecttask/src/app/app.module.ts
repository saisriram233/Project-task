import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import { ContactComponent } from './contact/contact.component';
import { TableModule } from 'primeng/table';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { GMapModule } from 'primeng/gmap';
import { HttpComponent } from './http/http.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ContactComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, MenubarModule, TableModule, VirtualScrollerModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
