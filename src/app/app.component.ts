import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Robert\'s Amazing Stock Market';

  public stock!: Stock;

  ngOnInit(): void {
      this.stock = new Stock('Test Stock Company', 'TSC', 85, 80)
  }

  onToggleFavorite(stock: Stock) {
    console.log(`Favorite stock ${stock} was triggered`)
    this.stock.favorite = !this.stock.favorite;
  }
}
