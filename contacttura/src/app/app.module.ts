import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateEditContactsComponent } from './contacts/create-edit/create-edit.component';
import { ListContactsComponent } from './contacts/list/list.component';
import { CreateEditUsersComponent } from './users/create-edit/create-edit.component';
import { ListUsersComponent } from './users/list/list.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './sharedComponents/error404/error404.component';
import { NavigationBarComponent } from './sharedComponents/navigation-bar/navigation-bar.component';
// Importações do material design
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
// Importação da paginação
import { NgxPaginationModule } from 'ngx-pagination';
// Importação do mósulo de requisição http
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    CreateEditContactsComponent,
    ListContactsComponent,
    CreateEditUsersComponent,
    ListUsersComponent,
    LoginComponent,
    Error404Component,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
