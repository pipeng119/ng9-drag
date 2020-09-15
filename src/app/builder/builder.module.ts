import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FormsModule } from '@angular/forms';

import { BuilderComponent } from './builder.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  imports: [NgxDnDModule, CommonModule, FormsModule],
  declarations: [BuilderComponent, PieComponent, BarComponent],
  exports: [BuilderComponent, PieComponent],
})
export class BuilderModule {}
