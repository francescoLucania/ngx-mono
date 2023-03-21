import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {countSelector, decrease, increase, updatedAtSelector} from "./reducers/counter";
import {map} from "rxjs";

@Component({
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public count$ = this.store.select(countSelector);
  public disableCounter$ = this.count$.pipe(
    map((value) => value <= 0)
  );
  public updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private store: Store) {
  }



  public increase() {
    this.store.dispatch(increase())
  };

  public decrease() {
    this.store.dispatch(decrease())
  };
}
