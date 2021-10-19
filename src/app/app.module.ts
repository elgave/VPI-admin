import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login/login.component';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';
import { InterceptorService, interceptorProvider } from './service/interceptor/interceptor.service';
import { ChangePasswordComponent } from './changePassword/change-password/change-password.component';
import { SendEmailComponent } from './changePassword/send-email/send-email.component';
import { FooterComponent } from './footer/footer.component';


//angular material
import {MatSliderModule} from '@angular/material/slider'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';




@NgModule({
  declarations: [				
    AppComponent,
    LoginComponent,
    ChangePasswordComponent,
    SendEmailComponent,
    FooterComponent,
    HomeComponent,
    NavMenuComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [ interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
