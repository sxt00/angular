import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import {WorkplaceComponent} from './pages/workplace/workplace.component'
import {BasicformComponent} from './pages/basicform/basicform.component'
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    BasicformComponent,
    WorkplaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTypographyModule,
    NzPageHeaderModule,
    DemoNgZorroAntdModule,
    NzBreadCrumbModule

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
