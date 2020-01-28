import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PushpinComponent } from './pages/pushpin/pushpin.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
