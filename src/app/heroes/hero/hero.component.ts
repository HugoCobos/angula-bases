import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public activaded: boolean = true

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`
  }

  changeName(): void {
    this.name = 'Spiterman'
  }

  changeAge(): void {
    this.age = 18
  }

  resetForm(): void {
    this.name = 'ironman'
    this.age = 45
  }

}
