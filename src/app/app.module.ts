import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, AppRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CryptocurrencyComponent } from './components/cryptocurrency/cryptocurrency.component';
import { DescriptionComponent } from './components/description/description.component';
import { PlansComponent } from './components/plans/plans.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptocurrencyComponent,
    DescriptionComponent,
    PlansComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }