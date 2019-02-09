import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnMessagesModule } from 'an-messages';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AnMessagesModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
