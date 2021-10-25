import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewmoduleComponent } from './newmodule.component';

const routes: Routes = [{ path: '', component: NewmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewmoduleRoutingModule { }
