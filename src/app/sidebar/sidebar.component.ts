import { Component, OnInit } from '@angular/core';
import { DataService, IPathologists } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  // property to determine visibility of sidebar list
  showSideBar: boolean;

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.router.navigate([this.dataService.pathologists[0].id]);
  }

  loadPathologists(pathologists: IPathologists): void {
    this.router.navigate([pathologists.id]);
  }

  toggleList(): void {
    this.showSideBar = !this.showSideBar;
    if(this.showSideBar) {
      document.body.classList.add('expander-on')
    } else {
      document.body.classList.remove('expander-on')
    }
  }
}
