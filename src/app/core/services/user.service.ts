import { Injectable } from '@angular/core'

import { ApiService } from './api.service'
import { Observable } from 'rxjs'

import { User } from '../models/user.model'

const routes = {
    users: '/users'
}

@Injectable()
export class UserService {

    constructor(private apiService: ApiService) {}

    getUsers(): Observable<User[]> {
        return this.apiService.retrieve(routes.users)
    }

    getUser(id: number): Observable<User> {
      return this.apiService.retrieve(`${routes.users}/${id}`)
    }

    createUser(user_name: string, user_email: string, user_phone: string): Observable<User> {
      return this.apiService.save(routes.users, {
        name: user_name,
        email: user_email,
        phone: user_phone
      })
    }

    updateUser(user_name: string, user_email: string, user_phone: string, id: number): Observable<User> {
      return this.apiService.update(`${routes.users}/${id}`, {
        name: user_name,
        email: user_email,
        phone: user_phone
      })
    }

    removeUser(id: number): Observable<User> {
      return this.apiService.destroy(`${routes.users}/${id}`)
    }

}
