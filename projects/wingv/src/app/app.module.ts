import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SecretComponent } from './secret/secret.component';

import { FlipBoardModule } from 'flip-board';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FlipBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
