import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSliderModule } from 'ng-zorro-antd/slider';

@NgModule({

  imports: [
    WelcomeRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzDividerModule,
    NzGridModule,
    NzSliderModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
