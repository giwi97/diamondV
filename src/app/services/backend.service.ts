import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getConfig() {
    return environment.social;
  }
  getCartTot() {
    // tslint:disable-next-line:prefer-const
    let fakeresponse = '10';
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }
  getUserStatus() {
    // tslint:disable-next-line:prefer-const
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }
  getProducts(collType) {

    // tslint:disable-next-line:prefer-const
    let fakeresponse = [{

      brand: 'Toyota',
       model: 'LandCruiser',
        name: 'Fuel pump',
         price: '50000',
          _id: '111'
    }];

    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }
}
