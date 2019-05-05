import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { Subject } from 'rxjs/Subject';
import { addDays, differenceInDays, startOfDay } from 'date-fns';
import { colors} from "./demo-utils/colors";

@Component({
  selector: 'master-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'master-calendar.component.html',
  styleUrls: ['./master-calendar.component.scss']
})
export class MasterCalendarComponent {
  view: string = 'month';

  viewDate: Date = new Date();

  externalEvents: CalendarEvent[] = [
    {
      title: 'Event 1',
      color: colors.yellow,
      start: new Date(),
      draggable: true
    },
    {
      title: 'Event 2',
      color: colors.blue,
      start: new Date(),
      draggable: true
    }
  ];

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  refresh: Subject<any> = new Subject();

  eventDropped({
                 event,
                 newStart,
                 newEnd
               }: CalendarEventTimesChangedEvent): void {
    const externalIndex: number = this.externalEvents.indexOf(event);
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    this.viewDate = newStart;
    this.activeDayIsOpen = true;
  }
}
