import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { StorageService } from './services/storage.service';
import { DomComponent } from './components/dom/dom.component';
import { TansitionComponent } from './components/tansition/tansition.component';
import { Footer9Component } from './components/footer9/footer9.component';
import { Header9Component } from './components/header9/header9.component';
import { Home9Component } from './components/home9/home9.component';
import { News9Component } from './components/news9/news9.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { Home11Component } from './components/home11/home11.component';
import { RequestService } from './services/request.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    DomComponent,
    TansitionComponent,
    Footer9Component,
    Header9Component,
    Home9Component,
    News9Component,
    LifecycleComponent,
    Home11Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StorageService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
