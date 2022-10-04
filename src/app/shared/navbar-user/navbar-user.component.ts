import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';
import {UserService} from '../../service/user/user.service';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {
  currentUserId: number;
  user: User;
  loggedIn: boolean;

  constructor(private authService: AuthService,
              private userService: UserService) {
    this.currentUserId = this.authService.currentUserValue.id;
  }

  ngOnInit() {
    this.checkLoginAndGetInfo();
  }

  getUserByUserId() {
    this.userService.getUserByUserId(this.currentUserId).subscribe((user) => {
      this.user = user;
    });
  }
  checkLoginAndGetInfo() {
    this.loggedIn = this.authService.isLoggedIn();
    if (this.loggedIn) {
      this.getUserByUserId();
    }
  }

  logout() {
    this.authService.logout();
  }
}
