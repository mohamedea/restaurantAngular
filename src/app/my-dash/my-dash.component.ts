import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from '../service/quick-lunch.service';
import { Food } from '../models/food.interface';

@Component({
  selector: 'app-my-dash',
  templateUrl: './my-dash.component.html',
  styleUrls: ['./my-dash.component.css'],
})
export class MyDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Burger', cols: 2, rows: 1, id: 'brg' },
          { title: 'Gelete/Crepe', cols: 2, rows: 1, id: 'glt' },
          { title: 'Pizza', cols: 2, rows: 1, id: 'pzz' }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 2, rows: 1 },
        { title: 'Card 4', cols: 2, rows: 1 }
      ];
    })
  );
  burgers: Food[];
  pizza: Food[];
  galete: Food[];

  constructor(private breakpointObserver: BreakpointObserver, private qls: QuickLunchService) { }
  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizza = this.qls.getPizzas();
    this.galete = this.qls.getGalettes();
  }

}
