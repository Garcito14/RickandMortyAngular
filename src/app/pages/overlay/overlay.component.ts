import { Component, Inject ,OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { EpisodesService } from 'src/app/services/episodes.service';
import { SpecificCharacterService } from 'src/app/services/specific-character.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  episodes: any= {}
  id;
  constructor( @Inject(MAT_DIALOG_DATA)public data:any, private specificApi:SpecificCharacterService,private episodesApi:EpisodesService){
      this.id = data.id
  }
  ngOnInit(): void {
    this.mostrarPersonaje()
    this.mostrarEpisodios()
  }

  mostrarPersonaje(){
    this.specificApi.getCharacter(this.id).subscribe((data) =>{
      this.data = data;
      console.log(this.data);
 
    })
}

mostrarEpisodios(){
  this.episodesApi.getEpisode().subscribe((episodes) =>{
    this.episodes = episodes;
    console.log(this.episodes);

  })
}
}
