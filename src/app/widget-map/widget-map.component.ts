import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-map',
  templateUrl: './widget-map.component.html',
  styleUrls: ['./widget-map.component.scss']
})
export class WidgetMapComponent implements OnInit {
  showContent = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.showContent = !this.showContent;
  }
}
