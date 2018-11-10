import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { IndexComponent } from './index/index.component'
import { CreateComponent } from './create/create.component'
import { EditComponent } from './edit/edit.component'

export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'users', component: IndexComponent },
    { path: 'users/create', component: CreateComponent },
    { path: 'users/edit/:id', component: EditComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
