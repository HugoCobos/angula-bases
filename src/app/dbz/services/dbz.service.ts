import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';

import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {

  public character: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegetta',
    power: 7500
  }
]


  addCharacter( character: Character ): void {

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    // de la siguiente forma tambien se puede hacer

    const newCharacter: Character = { id: uuid(), ...character }

    this.character.push(newCharacter);

  }

  // onDeleteCharacter(index: number): void {

  //   this.character.splice(index, 1)
  // }

  DeleteCharaterById( id: string ): void {

    this.character = this.character.filter( character => character.id !== id );
  }


}
