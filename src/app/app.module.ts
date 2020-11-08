import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.modules';
import { MyHomeComponent } from './my-home/my-home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/Admin/login/login.component';
import { RegisterComponent } from './components/Admin/register/register.component';
import { HttpRequestService } from './services/http-request.service';
import { AuthGuardService } from './services/routerguard/auth-guard.service';
import { JwtHelperService,JWT_OPTIONS   } from '@auth0/angular-jwt';
import { ValidateEqualModule } from 'ng-validate-equal'
import { UserComponent } from './components/Admin/user/user.component';
import { RoleComponent } from './components/Admin/role/role.component';
import { PermissionComponent } from './components/Admin/permission/permission.component';
import { CommonService } from './services/router/common.service';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    UserComponent,
    RoleComponent,
    PermissionComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ValidateEqualModule

  ],
  providers: [
    HttpRequestService,
    CommonService,
    AuthGuardService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },],

  bootstrap: [AppComponent]
})
export class AppModule { }
