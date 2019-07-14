import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'sonic';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.checkMobile()
  }

  ngOnInit() {
    this.checkMobile()
  }

  checkMobile() {
    const isMobile = window.innerWidth > 991 ? false : true;

    if (isMobile) {
      document.body.classList.add('mobile')
    } else {
      document.body.classList.remove('mobile')
    }
      
  }
}
