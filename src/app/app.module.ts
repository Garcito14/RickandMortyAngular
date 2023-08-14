import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import  {MatIconModule} from '@angular/material/icon';
import { NgSelectModule } from '@ng-select/ng-select';


import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OverlayComponent } from './pages/overlay/overlay.component';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    PipesModule,
    MatFormFieldModule,
    NgSelectModule
   
 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
