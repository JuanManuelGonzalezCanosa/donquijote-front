import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Book/list/list.component';
import { CreateComponent } from './Book/create/create.component';
import { PutComponent } from './Book/put/put.component';
import { DeleteComponent } from './Book/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { ServiceBook } from './Service/service.book';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    PutComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [ServiceBook],
  bootstrap: [AppComponent]
})
export class AppModule { }
