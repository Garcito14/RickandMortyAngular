import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isClicked = false
  data: any= {}

  constructor(private apiService:ApiService){}



    ngOnInit(): void {
      this.mostrarPersonajes()
    }
   

    mostrarPersonajes(){
          this.apiService.getData().subscribe((data) =>{
            this.data = data;
         
            console.log(this.data);
       
          })
    }

    showInfoModal(id: number){
    
      this.isClicked = true

    }
}
