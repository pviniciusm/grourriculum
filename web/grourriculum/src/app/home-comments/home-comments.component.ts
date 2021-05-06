import { Component, DoCheck, OnChanges, OnInit, ChangeDetectionStrategy, ViewChild, Input, ElementRef  } from '@angular/core';
import { NguCarouselConfig, NguCarousel  } from '@ngu/carousel';
import { BackendService } from '../backend.service';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


@Component({
  selector: 'app-home-comments',
  templateUrl: './home-comments.component.html',
  styleUrls: ['./home-comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCommentsComponent implements OnInit {

  comentarios: any[] = [];
  carouselTile: NguCarouselConfig;
  btnDisabled = false;
  txtEnviar:string = 'Enviar';
  closeResult = '';

  @ViewChild('carouselWrapper') carouselWrapper: ElementRef;
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  @ViewChild('content') content: NgbdModalContent;

  // Form variables
  formName = '';
  formRelation = '';
  formComment = '';
  responseMessage = '';

  loading = true;

  constructor(
    private backendService: BackendService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.carouselTile = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, all: 0 },
      speed: 100,
      point: {
        visible: true
      },
      touch: true,
      loop: true,
  
      interval: {
        timing: 6000,
        initialDelay: 1
      },
      animation: 'lazy'
    };

    this.backendService.list((res) => {
      this.comentarios = [];

      const lit = res.data;
      this.comentarios = lit || [];

      this.loading = false;
    });
  }

  clickComment() {
    if(this.btnDisabled) {
      return;
    }

    if(!this.formComment) {
      this.open(this.content);
      return;
    }

    this.txtEnviar = 'Enviando...'
    this.btnDisabled = !this.btnDisabled;

    let campos = {
      name: this.formName,
      relation: this.formRelation,
      content: this.formComment
    };

//    this.toggleButton();
    this.backendService.postComment(campos).then((res: any) => {
      this.comentarios.splice(0, 0, res.data);
      this.open(this.content);

      this.formComment = '';
      this.formName = '';
      this.formRelation = '';

      this.toggleButton();
    }).catch(err => {
      console.log('Erro');
      console.log(err);

      alert('erro');
      this.toggleButton();
    });
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //this.carouselWrapper.nativeElement.focus();
      window.location.hash = '#comments';
      this.myCarousel.moveTo(0);
    })
    .catch(() => {
      this.carouselWrapper.nativeElement.focus();
      window.location.hash = '#comments';
      this.myCarousel.moveTo(0);

    });
  }
  
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;

    if(this.btnDisabled) {
      this.txtEnviar = 'Enviando...';
    } else {
      this.txtEnviar = 'Enviar';
    }
  }
  
}
