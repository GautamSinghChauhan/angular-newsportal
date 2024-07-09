import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/getallusers/user.component';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserRegistrationComponent } from './user/user_registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { GetAllNewsComponent } from './news/get-all-news/get-all-news.component';
import { UpdateNewsComponent } from './news/update-news/update-news.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    AppComponent,
    AddNewsComponent,
    AboutComponent,
    UserComponent,
    HeaderComponent,
    UserRegistrationComponent,
    GetAllNewsComponent,
    UpdateNewsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,// Import HttpClientModule here
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
