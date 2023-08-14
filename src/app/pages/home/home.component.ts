import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { OverlayComponent } from '../overlay/overlay.component';
import { LocationsService } from 'src/app/services/locations.service';

import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(NgSelectComponent)
  ngSelectComponent!: NgSelectComponent;
  data: any= {}
  location: any = {}
  personajes:any={};
  textoBuscar = '';
  constructor(private apiService:ApiService,private dialogRed: MatDialog,private locationService:LocationsService){}
    ngOnInit(): void {
      this.mostrarPersonajes()
      this.obtenerLugares()
    }

    async mostrarPersonajes(){
          this.apiService.getData().subscribe((data) =>{
            this.data = data;
            console.log(this.data);
          })
    }

    obtenerLugares(){
      this.locationService.getLocations().subscribe((location) =>{
        this.location = location;
        console.log(this.location);
      })
}

    showInfoModal(id:number){
      this.dialogRed.open(OverlayComponent,{
        data:{
        id:id
            }
          }) 
      }


      filtrarLugares(event:any) {
        
          console.log(event.name);
          this.data.results =  this.data.results.filter( ( data:any )=>{
         
          return data.location.name.includes(event.name);
      })
      }
  
      reiniciarPersonajes(){
        this.mostrarPersonajes()
        this.ngSelectComponent.handleClearClick();
        console.log("hola");
      }
}
