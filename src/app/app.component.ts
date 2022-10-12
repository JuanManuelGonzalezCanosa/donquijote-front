import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'donquijote-front';

  constructor(private router:Router){}

  List(){
    this.router.navigate(["list"])
  }
  Create(){
    this.router.navigate(["create"])
  }
  Delete(){
    this.router.navigate(["delete"])
  }
  Put(){
    this.router.navigate(["put"])
  }
}
