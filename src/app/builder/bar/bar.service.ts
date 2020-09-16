import { ElementRef, Injectable } from '@angular/core';
import * as echarts from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  barSource;

  echarted;
  constructor() {}

  initBarCharts(el: ElementRef, option) {
    if (this.echarted) {
      this.echarted.clear();
    }
    this.echarted = echarts.init(el.nativeElement);
    this.echarted.setOption(option);
  }
}
