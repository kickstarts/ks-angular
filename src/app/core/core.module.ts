import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { environment } from '@env/environment'

import { AuthorizedGuard } from './guards/authorized.guard'
import { UnauthorizedGuard } from './guards/unauthorized.guard'
import { throwIfAlreadyLoaded }from './guards/modules.guard'

import { TokenInterceptor } from './interceptors/token.interceptor'


import { services } from './services'

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
      AuthorizedGuard,
      UnauthorizedGuard,

        ...services,

        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule')
    }
}
