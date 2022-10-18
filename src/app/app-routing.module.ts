import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientdataComponent } from './Book/clientdata/clientdata.component';
import { CreateComponent } from './Book/create/create.component';
import { ListComponent } from './Book/list/list.component';
import { PutComponent } from './Book/put/put.component';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path: 'create', component:CreateComponent},
  {path: 'put', component:PutComponent},
  {path: 'client', component:ClientdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
