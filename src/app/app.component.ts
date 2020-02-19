import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: {text: string} = {text: 'курс по ангуляру'};

  private  _money: number = 3000;

  public imgSrc: string = 'https://lh3.googleusercontent.com/proxy/X1MoecKavwyk8fqCIfO8-SP74ht40gViBG4RfcTGDjEINN2N2OKU5muc-l1d5ZNqyODZt5gAFuDodkkBmSkrp0OR4xEU_KxaoYmf9BnJZiQXO0SA2VguV7OI3TSiUng5vX_UdPk';

  public content: string = '<span>Привет!</span>';

  public getMoney(): number {
    return this._money * 1.2;
  }

  public onImgClick(event: MouseEvent, src: string): void {
    console.log(event, src);
  }

}
