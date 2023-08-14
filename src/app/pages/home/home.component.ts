import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { OverlayComponent } from '../overlay/overlay.component';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  data: any= {}
  location: any = {}
  constructor(private apiService:ApiService,private dialogRed: MatDialog,private locationService:LocationsService){}
    ngOnInit(): void {
      this.mostrarPersonajes()
      this.obtenerLugares()
    }

    mostrarPersonajes(){
          this.apiService.getData().subscribe((data) =>{
            this.data = data;
            console.log(this.data);
          })
    }

    obtenerLugares(){
      this.locationService.getLocations().subscribe((location) =>{
        this.location = location;
        console.log(this.data);
      })
}

    showInfoModal(id:number){
      this.dialogRed.open(OverlayComponent,{
        data:{
        id:id
      }
      })
      
    }
}
