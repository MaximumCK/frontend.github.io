import {Component, OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

    topbarTheme: string = 'indigo';

    menuTheme: string = 'indigo';

    layoutMode: string = 'light';

    menuMode: string = 'horizontal';

    inlineMenuPosition: string = 'bottom';

    inputStyle: string = 'filled';

    ripple: boolean = true;

    isRTL: boolean = false;

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
