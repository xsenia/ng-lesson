import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //"входной параметр" - внутрь компонента мы общаемся через @Input()
  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {
  }

}
