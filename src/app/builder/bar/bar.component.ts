import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  @ViewChild('bar', { static: true })
  barEl: ElementRef;
  @Input('type')
  set options(type) {
    if (type) {
      this.initCharts(type);
    }
  }
  echarted;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  async initCharts(type) {
    let option;
    switch (type) {
      case 'media':
        option = await this.getData(type);
        break;
      case 'person':
        option = await this.getData1(type);
        break;
    }
    if (this.echarted) {
      this.echarted.clear();
    }
    this.echarted = echarts.init(this.barEl.nativeElement);
    this.echarted.setOption(option);
  }

  async getData(type) {
    return await this.http.get('assets/mock.data.json').toPromise();
  }
  async getData1(type) {
    return await this.http.get('assets/mock.data1.json').toPromise();
  }
}
