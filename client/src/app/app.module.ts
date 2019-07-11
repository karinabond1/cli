import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {Routes, RouterModule} from "@angular/router";
import {AlertModule, ButtonsModule, BsDropdownModule, CollapseModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {CalendarComponent} from './calendar/calendar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    {path: '', component: UserComponent},
    { path: 'calendar', component: CalendarComponent} ,
    { path: '**', component: NotFoundComponent },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        CalendarComponent,
        NotFoundComponent,
        AdminComponent
    ],
    imports: [
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        RoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
