import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from '../app/auth/auth.module';

const routes: Routes = [

  // {
  //   path: '',
  //   loadChildren: () => import('../app/auth/auth.module').then(a => a.AuthModule)
  // }

];

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
