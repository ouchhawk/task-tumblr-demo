import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ContentComponent } from './components/content/content/content.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
