import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  overlayX: number = 0;
  overlayY: number = 0;
  isClicked = false
  data: any= {}

  constructor(private apiService:ApiService,private dialogRed: MatDialog){}



    ngOnInit(): void {
      this.mostrarPersonajes()
    }
   
/*   openOverlay(event: MouseEvent, id:number) {
   
   
    this.overlayX = event.clientX ;
    this.overlayY = event.clientY;
    
    this.dialogRed.open(OverlayComponent)
    console.log('====================================');
    console.log(id);
    console.log('====================================');
   




  } */

    mostrarPersonajes(){
          this.apiService.getData().subscribe((data) =>{
            this.data = data;
         
            console.log(this.data);
       
          })
    }

    showInfoModal(){
    
      this.dialogRed.open(OverlayComponent)

    }
}
