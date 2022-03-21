import { Component, SimpleChanges, OnInit, OnChanges, OnDestroy,
  DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked,
  AfterContentInit, ViewEncapsulation, Input, Output, EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';
//import { EventEmitter } from 'stream';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent {

  @Input() public stock!: Stock;
  @Output() private toggleFavorite!: EventEmitter<Stock>;

  /*
  * This is removed when we add the input:
  * public stock!: Stock;
  * public stockClasses!: any;
  * public stockStyles!: any;
  * public stocks!: Array<Stock>
  */

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  onToggleFavorite(event: any) {
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice() {
    this.stock.price += 5;
  }

  trackStockByCode(index: any, stock: any) {
    return stock.code;
  }

}


/*  OLD CODE:
 *   this.stocks = [
 *     new Stock('Test Stock Company', 'TSC', 85, 80),
 *     new Stock('First Stock Company', 'FSC', 78, 60),
 *     new Stock('Awesome Stock Company', 'ASC', 22, 80),
 *     new Stock('Oaxaca Stock Company', 'OSC', 99, 80)
 *   ]

 *   let diff = (this.stock.price / this.stock.previousPrice) - 1;
 *   let largeChange = Math.abs(diff) > 0.01;
 *   this.stockClasses = {
 *     "positive": this.stock.isPositiveChange(),
 *     "negative": !this.stock.isPositiveChange(),
 *     "large-change": largeChange,
 *     "small-change": !largeChange
 *   }
 *   this.stockStyles = {
 *     "color": this.stock.isPositiveChange() ? "green" : "red",
 *     "font-size": largeChange ? "1.2em" : "0.8em"
 *   }
 *
 *   toggleFavorite(event: any, index: any) {
 *     console.log('Toggle favorite state', event);
 *     this.stocks[index].favorite = !this.stocks[index].favorite;
 *   }
 *
 *
 *    */

