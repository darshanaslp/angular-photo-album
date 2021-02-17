import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

// Model
import { UserModel } from '../../models/user.model';

// Service
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserModel[]
  constructor(
    private usersService: UsersService,
    private spinner: NgxSpinnerService
   ) { }
  
  getUsers(): void {
    this.spinner.show();
    this.usersService.getUsers()
      .subscribe(
        users => this.users = users,
        err => console.log('HTTP Error', err),
        () => this.spinner.hide()
        )
  }

  ngOnInit() {
    this.getUsers()
  }

}