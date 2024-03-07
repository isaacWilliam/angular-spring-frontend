import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {ThemingService} from "./shared/services/theming.service";
import {HttpClientModule} from "@angular/common/http";
import {RippleModule} from "primeng/ripple";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageLayoutService} from "./shared/services/message.layout.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    RippleModule
  ],
  providers: [
    ThemingService,
    MessageLayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
