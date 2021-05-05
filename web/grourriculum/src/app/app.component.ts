import { Component, DoCheck, OnChanges, OnInit, ChangeDetectionStrategy, ViewChild  } from '@angular/core';
import { NguCarouselConfig, NguCarousel  } from '@ngu/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {

  title = 'grourriculum';
  comentarios: any[] = [
    {name: 'Pessoa 1', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'},
    {name: 'Pessoa 2', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'},
    {name: 'Pessoa 3', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'},
    {name: 'Pessoa 4', comment: 'Bla bla.', relation: 'Amigo'},
    {name: 'Pessoa 5', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'},
    {name: 'Pessoa 6', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'},
    {name: 'Pessoa 7', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'},
    {name: 'Pessoa 8', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'},
    {name: 'Pessoa 9', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'},
    {name: 'Pessoa 10', comment: 'Bla bla bla bla bla bla bla bla blé bla.', relation: 'Amigo'}
  ];

  carouselTile: NguCarouselConfig;

  constructor() {
  }

  ngOnInit() {
    this.carouselTile = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, all: 0 },
      speed: 100,
      point: {
        visible: true
      },
      touch: true,
      loop: true,
  
      interval: {
        timing: 4000,
        initialDelay: 1
      },
      animation: 'lazy'
    };
  }

  ngDoCheck() { }

  clickComment() {
    alert('Você clicou no comentário! Enviaremos ao backend assim que possível.');
  }
 
}
