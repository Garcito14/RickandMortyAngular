import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OverlayComponent } from './pages/overlay/overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
