import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectComponent } from './tree-select/select/select.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    TreeSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
