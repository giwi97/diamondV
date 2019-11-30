import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {BackendService} from './../../services/backend.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  toggleField: string;
  savedChanges = false;
  // tslint:disable-next-line:no-inferrable-types
  error: boolean = false;
  // tslint:disable-next-line:ban-types
  errorMessage: String = '';
  dataLoading = false;
  dataSource: MatTableDataSource<any>;
  members: any[];
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
    },

      (error) => {
        this.error = true;
        this.errorMessage = error.message;
        this.dataLoading = false;
      },
      () => {this.error = false; this.dataLoading = false; });
  }

  // function for result view
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
