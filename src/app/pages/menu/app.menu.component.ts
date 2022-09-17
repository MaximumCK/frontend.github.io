import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'app-menu',
    template: `
        <ul class="layout-menu">
            <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
        </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor() {}

    ngOnInit() {
        this.model = [
            {
                label: 'Main', icon: 'pi pi-fw pi-star', routerLink: ['/home'],
                items: [
                    {label: 'Information', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/home/information']},
                ]
            },
        ];
    }
}
