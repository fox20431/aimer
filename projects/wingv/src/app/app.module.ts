import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { FlipBoardModule } from 'flip-board';
// import { SakanaModule } from 'sakana';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FontAwesomeModule,
		FlipBoardModule,
		// SakanaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
