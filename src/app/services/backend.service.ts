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

      // tslint:disable-next-line:object-literal-key-quotes
      'brand': 'Toyota',
       // tslint:disable-next-line:object-literal-key-quotes
       'model': 'LandCruiser',
        // tslint:disable-next-line:object-literal-key-quotes
        'name': 'Fuel pump',
         // tslint:disable-next-line:object-literal-key-quotes
         'price': '50000',
          // tslint:disable-next-line:object-literal-key-quotes
          '_id': '111'
    }];

    return Observable.create(
      observer => {
        setTimeout(() => {
          // tslint:disable-next-line:semicolon
          observer.next(fakeresponse)
        // tslint:disable-next-line:semicolon
        }, 2000)
      }
    // tslint:disable-next-line:semicolon
    )
  }

  getFilterProducts(collType, filters) {

    // tslint:disable-next-line:prefer-const
    let fakeresponse = [{

      // tslint:disable-next-line:object-literal-key-quotes
      'brand': 'Toyota',
       // tslint:disable-next-line:object-literal-key-quotes
       'model': 'LandCruiser',
        // tslint:disable-next-line:object-literal-key-quotes
        'name': 'Fuel pump',
         // tslint:disable-next-line:object-literal-key-quotes
         'price': '50000',
          // tslint:disable-next-line:object-literal-key-quotes
          '_id': '111'
    }];

    return Observable.create(
      observer => {
        setTimeout(() => {
          // tslint:disable-next-line:semicolon
          observer.next(fakeresponse)
        // tslint:disable-next-line:semicolon
        }, 2000)
      }
    // tslint:disable-next-line:semicolon
    )
  }

  setProducts(collType, filters) {
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

  updateProducts(collType, filters) {
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

  getOneProductDoc(collType, docId) {

    // tslint:disable-next-line:prefer-const
    let fakeresponse = {

      // tslint:disable-next-line:object-literal-key-quotes
      'brand': 'Toyota',
       // tslint:disable-next-line:object-literal-key-quotes
       'model': 'LandCruiser',
        // tslint:disable-next-line:object-literal-key-quotes
        'name': 'Fuel pump',
         // tslint:disable-next-line:object-literal-key-quotes
         'price': '50000',
          // tslint:disable-next-line:object-literal-key-quotes
          '_id': '111'
    };

    return Observable.create(
      observer => {
        setTimeout(() => {
          // tslint:disable-next-line:semicolon
          observer.next(fakeresponse)
        // tslint:disable-next-line:semicolon
        }, 2000)
      }
    // tslint:disable-next-line:semicolon
    )
  }

  delOneProductDoc(collType, docId) {

    // tslint:disable-next-line:prefer-const
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          // tslint:disable-next-line:semicolon
          observer.next(fakeresponse)
        // tslint:disable-next-line:semicolon
        }, 2000)
      }
    // tslint:disable-next-line:semicolon
    )
  }


}
