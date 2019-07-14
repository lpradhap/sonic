import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPathologists, DataService } from '../service/data.service';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  pathologist: IPathologists;

  constructor(private activatedRoutes: ActivatedRoute, public dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.activatedRoutes.params.subscribe(res => {
      this.getPathologist(parseInt(res.id));
    })
  }

  getPathologist(id: number): void {
    // method extract active pathologist item
    this.pathologist = this.dataService.pathologists.find(el => {
      return el.id === id;
    });

    this.dataService.activePathologistID = this.pathologist ? this.pathologist.id : null;
  }

  loadPathologists(pathologists: IPathologists): void {
    this.router.navigate([pathologists.id]);
  }
}
