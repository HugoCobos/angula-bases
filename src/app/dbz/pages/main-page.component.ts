import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone: false
})

export class MainPageComponent{

constructor( private dbzService: DbzService ) {}

get character(): Character[] {
 return [...this.dbzService.character];
}

onDeleteCharacterById(id: string ):void {
  this.dbzService.DeleteCharaterById(id)
}

onNewCharacter( character: Character ): void{
  return this.dbzService.addCharacter( character );
}

}
