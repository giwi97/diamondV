import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../router.animation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:no-host-metadata-property
  host: {'[@moveIn': ''}
})
export class FooterComponent implements OnInit {

    // tslint:disable-next-line:no-inferrable-types
    state: string = '';

  constructor() { }

  ngOnInit() {
  }

}
