import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';


@NgModule({
  declarations: [NavbarUserComponent, FooterComponent, NavbarAdminComponent, SidebarAdminComponent],
    exports: [
        NavbarUserComponent,
        FooterComponent,
        SidebarAdminComponent
    ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
