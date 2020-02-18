import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: {text: string} = {text: 'курс по ангуляру'};

  private _money = 3000;

  public getMoney(): number {
    return this._money * 1.2;
  }

}
