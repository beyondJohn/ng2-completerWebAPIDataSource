import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationComponent } from './location.component';
import { HTTPTestComponent } from './http-test.component';

import { FormsModule } from "@angular/forms";
import { Ng2CompleterModule } from "ng2-completer";



@NgModule({
  declarations: [
    AppComponent,LocationComponent,HTTPTestComponent
  ],
  imports: [
    BrowserModule,Ng2CompleterModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LocationComponent,HTTPTestComponent]
})
export class AppModule { }
