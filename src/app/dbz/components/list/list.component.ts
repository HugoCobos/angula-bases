import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()


  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]



  onDeleteCharacter(id?: string): void {

    if ( !id ) return;

    this.onDelete.emit(id);
  }
 }
