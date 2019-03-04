import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import {AppRoutingModule} from './app.routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './authentication-service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { WalletComponent } from './wallet/wallet.component';
// import {TokenInterceptor} from './token-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService ,
    // { provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
