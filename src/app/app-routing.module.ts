import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/notfound/app.notfound.component';
import {AppErrorComponent} from './pages/error/app.error.component';
import {AppAccessdeniedComponent} from './pages/accessdenied/app.accessdenied.component';
import {AppLoginComponent} from './pages/login/app.login.component';
import {InfomationComponent} from './pages/infomation/infomation.component';
@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: AppLoginComponent},
            {
                path: 'home', component: AppMainComponent,
                children: [
                    {path: 'information', component: InfomationComponent},
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
