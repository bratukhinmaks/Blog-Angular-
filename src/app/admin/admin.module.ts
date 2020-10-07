import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {CreatePageComponent} from './pages/create-page/create-page.component';
import {EditPageComponent} from './pages/edit-page/edit-page.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
          path: '', component: AdminLayoutComponent, children: [
            {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
            {path: 'login', component: LoginPageComponent},
            {path: 'dashboard', component: DashboardPageComponent},
            {path: 'create', component: CreatePageComponent},
            {path: 'login', component: LoginPageComponent},
            {path: 'post/:id/edit', component: EditPageComponent}
          ]
        }
      ]
    ),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [AdminLayoutComponent, LoginPageComponent, DashboardPageComponent, CreatePageComponent, EditPageComponent]
})

export class AdminModule {

}
