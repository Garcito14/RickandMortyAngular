import { Component, Inject ,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { SpecificCharacterService } from 'src/app/services/specific-character.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  
  id;
  constructor( @Inject(MAT_DIALOG_DATA)public data:any, private specificApi:SpecificCharacterService){
      this.id = data.id
  }
  ngOnInit(): void {
    this.mostrarPersonaje()
  }

  mostrarPersonaje(){
    this.specificApi.getCharacter(this.id).subscribe((data) =>{
      this.data = data;
      console.log(this.data);
 
    })
}
}
