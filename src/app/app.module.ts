import { PlanoService } from './../services/planos/plano.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PlataformaService } from './../services/plataformas/plataforma.service';
import { PageHome } from './../pages/home';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { TextMaskModule } from 'angular2-text-mask';




@NgModule({
  declarations: [
    AppComponent,
    PageHome,

    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [
    PlataformaService,
    PlanoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
