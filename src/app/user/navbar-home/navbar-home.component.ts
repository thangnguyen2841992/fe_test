import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeSearch} from '../../model/type-search';
import {TypeSearchService} from '../../service/type-search/type-search.service';
import {ValueService} from '../../service/value/value.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  typeSearchs: TypeSearch[] = [];
  typeSearchDefault: TypeSearch = {
    id: 1,
    name: 'Nhật -> Việt'
  };
  searchForm: FormGroup = new FormGroup({
    type: new FormControl(this.typeSearchDefault.id, [Validators.required]),
    key: new FormControl('', Validators.required)
  });

  constructor(private router: Router,
              private typeSearchService: TypeSearchService) {
  }

  ngOnInit() {
    this.getAllTypeSearch();
  }


  searchByKey() {
    if (this.searchForm.value.type == 1) {
      this.typeSearchDefault = {
        id: 1,
        name: 'Nhật -> Việt'
      };
      this.router.navigateByUrl('/home/search/' + this.searchForm.value.key);
      this.reloadComponent();
    }
    if (this.searchForm.value.type == 2) {
      this.router.navigateByUrl('/home/search1/' + this.searchForm.value.key);
      this.reloadComponent1();
      this.typeSearchDefault = {
        id: 2,
        name: 'Việt -> Nhật'
      };
    }
  }


  getAllTypeSearch() {
    this.typeSearchService.getAllTypeSearch().subscribe((data) => {
      this.typeSearchs = data;
    });
  }

  reloadComponent() {
    const currentUrl = `/home/search/${this.searchForm.value.key}`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  reloadComponent1() {
    const currentUrl = `/home/search1/${this.searchForm.value.key}`;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
