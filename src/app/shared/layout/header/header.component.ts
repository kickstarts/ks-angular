import { Component, OnInit } from '@angular/core'

import { environment } from '@env/environment'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    version = environment.version

    constructor() { }

    ngOnInit(): void { }
}
