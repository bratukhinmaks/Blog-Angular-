import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {CreatePageComponent} from './pages/create-page/create-page.component';
import {EditPageComponent} from './pages/edit-page/edit-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './shared/guards/auth.guard';
import {QuillModule} from 'ngx-quill';
import {SharedModule} from '../shared/shared.module';
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
        {
          path: '', component: AdminLayoutComponent, children: [
            {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
            {path: 'login', component: LoginPageComponent},
            {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
            {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
            {path: 'login', component: LoginPageComponent},
            {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
          ]
        }
      ]
    ),
    SharedModule
  ],
  exports: [RouterModule],
  declarations: [AdminLayoutComponent, LoginPageComponent, DashboardPageComponent, CreatePageComponent, EditPageComponent, AlertComponent],
  providers: [AuthGuard]
})

export class AdminModule {

}
