import { Component, OnInit } from '@angular/core'

import { UserService, User } from '@app/core'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-users-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {

  users: Observable<User[]>
  user: Observable<User>

  title = 'Users List'

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.users = this.service.getUsers()
  }

  loadUser(id) {
    this.user = this.service.getUser(id)
  }

  removeUser(id) {
    this.service.removeUser(id).subscribe( data => console.log('User was succesfully removed!') )
  }

}
