import { HttpClient } from '@angular/common/http';
import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuilderComponent {
  barData;

  sourceBuilderTools = [
    {
      name: 'pie',
      children: [] as any[],
      inputType: 'section',
      icon: 'far fa-square',
      class: 'wide',
      chartsType: 'pie',
      dataType: 'media'
    },
    {
      name: 'bar',
      inputType: 'string',
      icon: 'fas fa-language',
      class: 'half',
      chartsType: 'bar',
      dataType: 'person'
    },
    {
      name: 'bar1',
      inputType: 'number',
      icon: 'fas fa-hashtag',
      class: 'half',
      chartsType: 'bar',
      dataType: 'media'
    }
  ];
  targetBuilderTools: any[] = [];

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private http: HttpClient
  ) {}

  builderDrag(e: any) {
    const item = e.value;
    item.data =
      item.inputType === 'number'
        ? (Math.random() * 100) | 0
        : Math.random()
            .toString(36)
            .substring(20);
  }

  async log(e: any) {
    console.log(e.type, e);
  }
  cancel(e) {
    console.log('cancel');
    console.log(e.type, e);
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }
  @ViewChild('chartsContainer', { read: ViewContainerRef })
  chartsContainer: ViewContainerRef;

  isShowPie: boolean = false;

  loadComponent($event) {
    // let component = $event.value.tpl;
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
    //   component
    // );
    // const componentRef = this.chartsContainer.createComponent<any>(
    //   componentFactory,
    //   null,
    //   this.chartsContainer.injector
    // );
  }
}
