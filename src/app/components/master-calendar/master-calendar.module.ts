import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { DragAndDropModule } from 'angular-draggable-droppable';
import {MasterCalendarComponent} from "./master-calendar.component";
import { DemoUtilsComponent } from './demo-utils/demo-utils.component';
import { DemoUtilsModule} from "./demo-utils/demo-utils.module";
import {MatCardModule} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot(),
    DragAndDropModule,
    DemoUtilsModule,
    MatCardModule
  ],
  declarations: [MasterCalendarComponent, DemoUtilsComponent],
  exports: [MasterCalendarComponent]
})
export class MasterCalendarModule { }



