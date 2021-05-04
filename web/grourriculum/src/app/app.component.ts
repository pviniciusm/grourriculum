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
    {name: 'Comentário 1', titulo: 'Teste1'},
    {name: 'Comentário 2', titulo: 'Teste'},
    {name: 'Comentário 3', titulo: 'Teste'},
    {name: 'Comentário 4', titulo: 'Teste'},
    {name: 'Comentário 5', titulo: 'Teste'},
    {name: 'Comentário 6', titulo: 'Teste'},
    {name: 'Comentário 7', titulo: 'Teste'},
    {name: 'Comentário 8', titulo: 'Teste'},
    {name: 'Comentário 9', titulo: 'Teste'},
    {name: 'Comentário 10', titulo: 'Teste'}
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
        timing: 9999999,
        initialDelay: 1
      },
      animation: 'lazy'
    };
  }

  onMoveCarouselEvent(event): void {
    // let i = event.currentSlideItems;

    // if(i < 0) {
    //   i = 0;
    // }

    // if(i>= this.ofertasBackup.length) {
    //   i = this.ofertasBackup.length - 1;
    // }
  }

  ngDoCheck() { }
 
}
