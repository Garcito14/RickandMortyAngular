import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { OverlayComponent } from '../overlay/overlay.component';
import { LocationsService } from 'src/app/services/locations.service';
import { FiltrosPipe } from 'src/app/pipes/filtros.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  data: any= {}
  location: any = {}
  personajes:any[]=[];
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



      async filtrarLugares(event:any) {
        console.log(event.name);
        await  this.mostrarPersonajes()
     this.data.results =  this.data.results.filter( ( data:any )=>{
          return data.location.name.includes(event.name);
      })
      }

}
