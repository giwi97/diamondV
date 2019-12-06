import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
// import {MatSort} from '@angular/material/sort';
// import {MatTableDataSource} from '@angular/material/table';
import {BackendService} from './../../services/backend.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit, OnDestroy {

  toggleField: string;
  dataSource: MatTableDataSource<any>;
  members: any[];
  myDocData: any;
  savedChanges = false;
  // tslint:disable-next-line:no-inferrable-types
  error: boolean = false;
  // tslint:disable-next-line:ban-types
  errorMessage: String = '';
  // tslint:disable-next-line:no-inferrable-types
  dataLoading: boolean = false;

  private querySubscription;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayColumns = ['brand', 'model', 'name', 'price', '_id'];

  // tslint:disable-next-line:variable-name
  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.toggleField = 'searchMode';
    this.dataSource = new MatTableDataSource(this.members);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggle(filter?) {
    // tslint:disable-next-line:semicolon
    if (!filter) {filter = 'searchMode'} else { filter = filter; }
    this.toggleField = filter;
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getProducts('product')
      .subscribe(members => {
      this.members = members;
      this.dataSource = new MatTableDataSource(members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLoading = false;
    },

      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; });
  }


  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.getFilterProducts('product', filters)
      .subscribe(members => {
      this.members = members;
      this.dataSource = new MatTableDataSource(members);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataLoading = false;
    },

      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; });
  }

  setData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.setProducts('product', formData)
      .subscribe(members => {
        if (members) {
          this.savedChanges = true;
          this.dataLoading = false;
        }
    },

      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; });
  }

  updateData(formData) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.updateProducts('product', formData)
      .subscribe(members => {
        if (members) {
          this.savedChanges = true;
          this.dataLoading = false;
        }
    },

      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; });
  }

  getDoc(docId) {

    this.dataLoading = true;
    this.querySubscription = this._backendService.getOneProductDoc('product', docId)
      .subscribe(res => {
        if (res) {
          this.myDocData = res;
          this.toggle('editMode');
          this.dataLoading = false;
        }
    },

      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; });

  }

  deleteDoc(docId) {

    // tslint:disable-next-line:quotemark
    if (confirm("Are you sure want to delete this record ?")) {
    this.dataLoading = true;
    this.querySubscription = this._backendService.delOneProductDoc('product', docId)
      .subscribe(res => {
        if (res) {
          this.toggle('searchMode');
          this.dataLoading = false;
        }
    },

      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; });

  }
}



  // function for result view
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

}
