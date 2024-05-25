import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/getallusers/user.component';
import { HeaderComponent } from './header/header.component';
import { UserRegistrationComponent } from './user/user_registration/user-registration.component';
import { GetAllNewsComponent } from './news/get-all-news/get-all-news.component';
import { UpdateNewsComponent } from './news/update-news/update-news.component';


const routes: Routes = [
  { path: 'add-news', component: AddNewsComponent },
  { path: 'get-all-news', component: GetAllNewsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'get-all-users', component: UserComponent },// Route for the User component
  {path: 'header', component: HeaderComponent},
  {path: 'user-registration', component: UserRegistrationComponent},
  { path: 'update-news/:id', component: UpdateNewsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
