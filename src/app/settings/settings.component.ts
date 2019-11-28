import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../shared/router.animation';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:no-host-metadata-property
  host: {'[@moveIn': ''}
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
