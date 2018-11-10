import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { CoreModule } from '@app/core'
import { SharedModule } from '@app/shared'

import { UsersModule } from './modules/users/users.module'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,

    // Third-Party

    // core
    CoreModule,

    // Shared
    SharedModule,

    // Modules
    UsersModule,

    // App
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
