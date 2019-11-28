import { Component, OnInit, Input } from '@angular/core';
import { moveIn, fallIn } from '../router.animation';
import { BackendService } from './../../services/backend.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [moveIn(), fallIn()],
  // tslint:disable-next-line:no-host-metadata-property
  host: {'[@moveIn': ''}
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  state: string = '';

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  configData;
  counter = 0;
  userStatusColor = 'warn';

  // tslint:disable-next-line:variable-name
  constructor(private _backendservice: BackendService) { }

  ngOnInit() {
    this.counter = 0;
    this.configData = this._backendservice.getConfig();
    this._backendservice.getCartTot().subscribe(
      (res) => {
        this.counter = res;
      }
    );

    this._backendservice.getUserStatus().subscribe(
      (res) => {
        this.userStatusColor = res ? 'primary' : 'warn';
      }
    );
  }

}
