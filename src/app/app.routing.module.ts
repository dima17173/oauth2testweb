import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {WalletComponent} from './wallet/wallet.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'edit-user', component: EditUserComponent},
  { path: 'wallet', component: WalletComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
