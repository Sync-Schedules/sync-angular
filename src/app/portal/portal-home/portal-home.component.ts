import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import * as moment from 'moment';
import * as _ from 'lodash';
import {CalendarDate} from "../../shared/sync-calendar/sync-calendar.component";
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {UserService} from "../../services/user.service";
import {Shift} from "../../models/shift.model";
// import {CalWeekComponent} from "../../dialogs/cal-week/cal-week.component";

export interface Weekly {
  wDate: moment.Moment;
  selected?: boolean;
  today?: boolean;
}

@Component({
  selector: 'app-portal-home',
  templateUrl: './portal-home.component.html',
  styleUrls: ['./portal-home.component.scss'],
})
export class PortalHomeComponent implements OnInit {

  // user: any;
  shift: any;
  venue: any;
  time: String;
  // date: Date;
  open: boolean = false;
  djs = [];
  venues = [];
  dj: any;
  id: string;
  dayName = moment().format('dddd');
  date = new Date().getDate();
  currentDate = moment();

  user: any;
  weeks: Weekly[][] = [];
  sortedDates: Weekly[] = [];
  dateClicked: any;
  dateClickedDay: any;

  displayedColumns = ['venue', 'date', 'time', 'DJ','actions','pending'];
  dataSource = new MatTableDataSource<Shift>();

  @Input() selectedDates: Weekly[] = [];
  @Output() onSelectDate = new EventEmitter<Weekly>();


  alert: boolean = false;
  emptyshifts = [];


  daysOfWeek =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  constructor(private auth: AuthService, private dialog: MatDialog, private us: UserService, private snackBar: MatSnackBar) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.applyFilter('true');

    this.auth.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err =>{
        console.log(err);
        return false;
      });

    // console.log(this.dayName);
    // console.log(this.currentDate);
    this.generateWeek();

    this.emptyshifts.length=0;


    this.us.getShifts().subscribe(data =>{

      this.dataSource.data = data;
      this.shift = data;



      this.ngOnInit()


    });

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedDates &&
      changes.selectedDates.currentValue &&
      changes.selectedDates.currentValue.length  > 1) {
      // sort on date changes for better performance when range checking
      this.sortedDates = _.sortBy(changes.selectedDates.currentValue, (m: CalendarDate) => m.mDate.valueOf());
      this.generateWeek();
    }
  }

   isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  isSelected(date: moment.Moment): boolean {
    return _.findIndex(this.selectedDates, (selectedDate) => {
      return moment(date).isSame(selectedDate.wDate, 'day');
    }) > -1;
  }

  isSelectedWeek(date: moment.Moment): boolean {
    return _.findIndex(this.selectedDates, (selectedDate) => {
      return moment(date).isSame(selectedDate.mDate, 'day');
    });
  }

  selectDate(date: Weekly){
    this.onSelectDate.emit(date);
    console.log(date.wDate.format('dddd'));
    return this.dateClicked = date.wDate.format('dddd MMM Do YYYY');
  }

//  Actions

  prevWeek(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'weeks');
    this.generateWeek();
  }

  nextWeek(): void {
    this.currentDate = moment(this.currentDate).add(1, 'weeks');
    this.generateWeek();
  }

  firstWeek(): void {
    this.currentDate = moment(this.currentDate).startOf('month');
    this.generateWeek();
  }

  generateWeek(): void {
    const dates = this.fillDates(this.currentDate);
    const days: Weekly[][] = [];
    while (dates.length > 0) {
      days.push(dates.splice(0,7));
    }
    this.weeks = days;
  }

  fillDates(currentMoment: moment.Moment): Weekly[] {
    const firstOfWeek = moment(currentMoment).startOf('week').day();
    const firstDayOfGrid = moment(currentMoment).startOf('week').subtract(firstOfWeek, 'days');
    const start = firstDayOfGrid.date();
    return _.range(start, start + 7)
      .map((date: number): Weekly => {
        const d = moment(firstDayOfGrid).date(date);
        return {
          today: this.isToday(d),
          selected: this.isSelected(d),
          wDate: d,
        };
      });
  }

  pickUpShift(shift){

      this.shift = {
        dj: this.user.username,
        pending: shift.pending = false
      };
      this.id = shift._id;
      this.auth.updateShift(this.id, this.shift)
        .subscribe(data => {
          if (data.success){
            this.snackBar.open(shift.dj + ' picked up '+ shift.venue
              +'!' , '', {duration: 300});
            this.ngOnInit();
          }
          else{
            this.snackBar.open('something went wrong');
          }
        });

  }



}
