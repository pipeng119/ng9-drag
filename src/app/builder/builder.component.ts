import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BuilderComponent {
  sourceBuilderTools = [
    {
      name: 'Section',
      children: [] as any[],
      inputType: 'section',
      icon: 'far fa-square',
      class: 'wide',
      container: 'pie',
      tpl: () => {a:PieComponent},
    },
    {
      name: 'String',
      inputType: 'string',
      icon: 'fas fa-language',
      class: 'half',
      container: 'bar',
      tpl: () => {a:BarComponent},
    },
    {
      name: 'Number',
      inputType: 'number',
      icon: 'fas fa-hashtag',
      class: 'half',
      container: 'line',
      tpl: () => {a:PieComponent},
    },
  ];
  targetBuilderTools: any[] = [];

  droppableItemClass = (item: any) => `${item.class} ${item.inputType}`;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  builderDrag(e: any) {
    const item = e.value;
    item.data =
      item.inputType === 'number'
        ? (Math.random() * 100) | 0
        : Math.random().toString(36).substring(20);
  }

  log(e: any) {
    console.log(e.type, e);
  }

  canMove(e: any): boolean {
    return e.indexOf('Disabled') === -1;
  }
  @ViewChild('chartsContainer', { read: ViewContainerRef })
  chartsContainer: ViewContainerRef;

  loadComponent($event) {
    let component = $event.value.tpl().a;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    const componentRef = this.chartsContainer.createComponent<any>(
      componentFactory,
      null,
      this.chartsContainer.injector
    );
  }
}
