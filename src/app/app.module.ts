import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  MatDialogModule, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule,
  MatNativeDateModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatRadioModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from "@angular/material";
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from "@angular/material";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PortalComponent } from './components/portal/portal.component';
import { LoginBarComponent } from './components/login/login-bar/login-bar.component';
import { EmployeesComponent } from './components/portal/users/users.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VenueDataComponent } from './components/portal/venue-data/venue-data.component';
import { AddVenueComponent } from './components/dialogs/add-venue/add-venue.component';
import { ValidateService } from "./services/validation/validate.service";
import { AuthService } from "./services/auth/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { UserService } from "./services/users/user.service";
import { AddUserComponent } from './components/dialogs/add-user/add-user.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ConfirmDialogComponent } from './components/dialogs/delete-dialog/confirm-dialog.component';
import { AdminGuard } from "./guards/admin.guard";
import { SyncCalendarComponent } from './shared/sync-calendar/sync-calendar.component';
import { EditUserComponent } from './components/dialogs/edit-user/edit-user.component';
import { NavComponent } from './components/portal/nav/nav.component';
import { ScheduleComponent, ViewAvailability } from './components/portal/schedule/schedule.component';
import { EditVenueComponent } from './components/dialogs/edit-venue/edit-venue.component';
import { PortalHomeComponent } from "./components/portal/portal-home/portal-home.component";
import { AddShiftComponent } from './components/dialogs/add-shift/add-shift.component';
import { DjsComponent } from "./components/portal/djs/djs.component";
import { ShiftsComponent } from './components/portal/shifts/shifts.component';
import { AvailabiltyComponent } from "./components/portal/availabilty/availabilty.component";
import { CalWeekComponent } from './shared/cal-week/cal-week.component';
import { SelectDjComponent } from './components/dialogs/select-dj/select-dj.component';
import { EditShiftComponent } from "./components/dialogs/edit-shift/edit-shift.component";
import { CreateShiftComponent } from './components/dialogs/create-shift/create-shift.component';
import { MailerService } from "./services/mail/mailer.service";
import { HelpComponent } from "./help/help.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PortalComponent,
    LoginBarComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent,
    VenueDataComponent,
    AddVenueComponent,
    AddUserComponent,
    ConfirmDialogComponent,
    SyncCalendarComponent,
    EditUserComponent,
    NavComponent,
    ScheduleComponent,
    AvailabiltyComponent,
    EditVenueComponent,
    PortalHomeComponent,
    AddShiftComponent,
    EmployeesComponent,
    DjsComponent,
    ShiftsComponent,
    AvailabiltyComponent,
    CalWeekComponent,
    ViewAvailability,
    SelectDjComponent,
    EditShiftComponent,
    CreateShiftComponent,
    HelpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    HttpModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
    MatSlideToggleModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token')
        }
      }
    }),
  ],
  providers: [
    FormBuilder,
    ValidateService,
    AuthService,
    AuthGuard,
    AdminGuard,
    UserService,
    MailerService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddVenueComponent,
    AddUserComponent,
    ConfirmDialogComponent,
    EditUserComponent,
    EditVenueComponent,
    AddShiftComponent,
    SelectDjComponent,
    CreateShiftComponent
  ]
})
export class AppModule { }
