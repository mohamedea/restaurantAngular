import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  plat1 = 'assets/image/plat1.jpg';

  constructor() { }

  ngOnInit() {
  }

}
