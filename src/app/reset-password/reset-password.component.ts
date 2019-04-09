import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {ValidateService} from "../services/validate.service";
import {MatDialog, MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private as: AuthService, private router:Router, private validateService: ValidateService, private snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  user: any;
  id:any;
  password: any;
  new_password: any;
  password_check: any

  ngOnInit() {
    this.as.getProfile().subscribe(profile => {
        this.user = profile.user;
        this.password = profile.password;
        this.id = profile.id;
      },
      err => {
        console.log(err);
        return false;
      });
  }


  onLoginSubmit() {

    const user = {
      new_password: this.password,
    };
    this.id = this.user.id;

    console.log('ID: '+this.id);
    console.log(user);
    //Register User
    this.as.updateUser(this.id, user)
      .subscribe(data => {
        if (data.success){
          this.snackBar.open('password has been changed!' , 'Cool', {duration: 2000});
          this.dialog.closeAll();
          this.router.navigate(['../portal'])
        }
        else{
          this.snackBar.open('something went wrong');
        }
      })
  }
}
