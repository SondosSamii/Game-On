import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'Home', component: HomeComponent},
  {path:'', redirectTo:'Home', pathMatch:'full'},
  {path:'Join', component: JoinComponent},
  {path:'ContactUs', component: ContactComponent},
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
