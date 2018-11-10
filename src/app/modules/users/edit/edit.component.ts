import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

// import { Observable } from 'rxjs'
// import { map } from 'rxjs/operators'

import { UserService, User } from '@app/core'

@Component({
  selector: 'app-users-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  user: any
  userForm: FormGroup

  title = 'Edit User'

  constructor(private route: ActivatedRoute, private router: Router, private service: UserService, private fb: FormBuilder) {
    this.updateForm()
  }

  updateForm() {
    this.userForm = this.fb.group({
      user_name: ['', Validators.required],
      user_email: ['', Validators.required],
      user_phone: ['', Validators.required]
    })
  }

  updateUser(user_name, user_email, user_phone) {
    this.route.params.subscribe(params => {
      this.service
        .updateUser(user_name, user_email, user_phone, params['id'])
        .subscribe(data => {
          console.log(data)
          console.log('User was succesfully edited!')
          this.router.navigate(['users'])
        })
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = this.service.getUser(params['id']).subscribe(data => {
        console.log(data)
        this.user = data
      })
    })
  }

}
