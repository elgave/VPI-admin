import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { GuardService as guard} from './service/guard/guard.service';
import { SendEmailComponent } from './changePassword/send-email/send-email.component';
import { ChangePasswordComponent } from './changePassword/change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { AdministradorRestaurantesComponent } from './administradorRestaurantes/administradorRestaurantes.component';
import { AdministradorAltaComponent } from './administradorAlta/administradorAlta.component';




const routes: Routes = [
  /*pantallas*/  
  /****/
  {path: 'home', component: HomeComponent},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'changePassword/:tokenPassword', component: ChangePasswordComponent},
  {path: 'restaurantes', component: AdministradorRestaurantesComponent},
  {path: 'altaAdministrador', component: AdministradorAltaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
