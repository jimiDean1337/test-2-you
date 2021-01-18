import { Component, Input, OnInit } from '@angular/core';
export interface TabData {
  name?: string;
  title?: string;
  backgroundImageSrc?: string;
  content?: TabContent;
}

export interface TabContent {
  title?: string;
  text?: string;
  list?: any[];
}
@Component({
  selector: 'tty-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() data: any;
  selectedTab = 0;
  constructor() { }

  ngOnInit(): void {
  }

  selectTab(idx: number) {
    this.selectedTab = idx;
  }

}
