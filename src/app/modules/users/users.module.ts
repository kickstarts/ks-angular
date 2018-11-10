import { NgModule } from '@angular/core'

import { SharedModule } from '@app/shared'

import { IndexComponent } from './index/index.component'
import { CreateComponent } from './create/create.component'
import { UsersRoutingModule } from './users.routing';
import { EditComponent } from './edit/edit.component'


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  exports: [],
  providers: [],
  entryComponents: []
})
export class UsersModule {}
