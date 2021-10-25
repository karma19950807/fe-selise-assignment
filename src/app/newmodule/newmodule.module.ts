import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewmoduleRoutingModule } from './newmodule-routing.module';
import { NewmoduleComponent } from './newmodule.component';


@NgModule({
  declarations: [
    NewmoduleComponent
  ],
  imports: [
    CommonModule,
    NewmoduleRoutingModule
  ]
})
export class NewmoduleModule { }
