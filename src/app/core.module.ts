import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// import { ShareModule } from '../app/share/share.module'
import { HeaderComponent } from './layouts/header/header.component';
import { BreadcrumbComponent } from './share/components/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from './share/components/breadcrumb/breadcrumb.module';
import { BreadcrumbItemComponent } from './share/components/breadcrumb/breadcrumb-item/breadcrumb-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent
  ]
})
export class CoreModule {
  // SkipSelf跳过自己不让引用自身模块；Optional允许首次父级引用为空
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule只能被AppModule引入');
    }
  }
}
