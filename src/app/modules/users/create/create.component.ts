import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { UserService } from '@app/core'

@Component({
  selector: 'app-users-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  userForm: FormGroup

  title = 'New User'

  constructor(private service: UserService, private router: Router, private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.userForm = this.fb.group({
      user_name: ['', Validators.required],
      user_email: ['', Validators.required],
      user_phone: ['', Validators.required]
    })
  }

  addUser(user_name, user_email, user_phone) {
    this.service
      .createUser(user_name, user_email, user_phone)
      .subscribe(data => {
        console.log(data)
        console.log('User was succesfully created!')
        this.router.navigate(['users'])
      })
  }

  ngOnInit() {
  }

}
