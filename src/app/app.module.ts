import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignalRConfigModule } from './signalr-config.module';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { ConnectionResolver } from './resolvers/connection.resolver';


@NgModule({
  declarations: [
    AppComponent,
     ChatComponent
  ],
  imports: [
    BrowserModule,
    SignalRConfigModule,
    AppRoutingModule
  ],
  providers: [ConnectionResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
