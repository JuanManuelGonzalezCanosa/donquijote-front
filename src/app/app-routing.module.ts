import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Book/create/create.component';
import { DeleteComponent } from './Book/delete/delete.component';
import { ListComponent } from './Book/list/list.component';
import { PutComponent } from './Book/put/put.component';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path: 'create', component:CreateComponent},
  {path: 'put', component:PutComponent},
  {path: 'delete', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
