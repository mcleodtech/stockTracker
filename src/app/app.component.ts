import { Component, SimpleChanges, OnInit, OnChanges, OnDestroy,
  DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked,
  AfterContentInit, ViewEncapsulation } from '@angular/core';
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
  private counter: number = 1;

  ngOnInit(): void {
      this.stock = new Stock('Test Stock Company - ' + this.counter++, 'TSC', 85, 80)
  }

  testMethod() {
    console.log("Test method in AppComponent Triggered");
  }

  onToggleFavorite(stock: Stock) {
    /*
     * This will update the value in the stock item component because it is triggered
     * as a result of an event binding from the stock item component.
     */
    console.log(`Favorite stock ${stock} was triggered`)
    this.stock.favorite = !this.stock.favorite;
  }

  changeStockObject() {
    /*
     * This wil update the value in the stock item component because we are creating
     * a new reference for the stock input.
     */
    this.stock = new Stock('Test Stock Company = ' + this.counter++, 'TSC', 85, 80)
  }

  changeStockPrice() {
    /*
     * This will not update the value in the stock item component because it is changing
     * the same reference and angular will not check for it in the OnPush
     * change detection strategy. The model will get updated, but not the view, so clicking
     * change price will actually change the price, but won't affect the view.
     */
    this.stock.price += 10;
  }
}
