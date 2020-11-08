import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Admin/login/login.component';
import { PermissionComponent } from './components/Admin/permission/permission.component';
import { RegisterComponent } from './components/Admin/register/register.component';
import { RoleComponent } from './components/Admin/role/role.component';
import { UserComponent } from './components/Admin/user/user.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { AuthGuardService as AuthGuard  } from './services/routerguard/auth-guard.service';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:MyHomeComponent,
  canActivate: [AuthGuard],
  children:[
    {path:'admin/user',component:UserComponent,canActivate: [AuthGuard],},
    {path:'admin/role',component:RoleComponent},
    {path:'admin/permission',component:PermissionComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
