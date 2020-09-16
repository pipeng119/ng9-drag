import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FormsModule } from '@angular/forms';

import { BuilderComponent } from './builder.component';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../common/header/header.module';

@NgModule({
  imports: [
    NgxDnDModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    HeaderModule
  ],
  declarations: [BuilderComponent, PieComponent, BarComponent],
  exports: [BuilderComponent, PieComponent]
})
export class BuilderModule {}
