import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message/message.component';
import { MessageModule } from './message/message.module';
import { TestModule } from './test/test.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, NgbModule, MessageModule, TestModule ],
  declarations: [ AppComponent,],
  bootstrap:    [ AppComponent ],
  entryComponents: [MessageComponent]
})
export class AppModule { }
