import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MobileSearchComponent } from './mobile-search/mobile-search.component';
import { DemoComponentComponent } from './demo/demo-component/demo-component.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { AddUserComponent } from './add-user/add-user.component';
import {EqualValidator}  from './tool/equal-validator';
import { DisplayUserComponent } from './display-user/display-user.component'
import {DataServiceService} from './data-service/data-service.service';
import { DisplayUserServiceComponent } from './display-user-service/display-user-service.component';
import { UserJsonListComponent } from './user-json-list/user-json-list.component';
import { UserJsonService } from './services/user-json.service';
import { HttpModule } from '@angular/http';
import { UserRestComponent } from './user-rest/user-rest.component';


const appRoutes: Routes = [
                           { path: 'MobileList', component: MobileListComponent },
                           { path: 'Search', component: MobileSearchComponent },
                           { path: 'Demo', component: DemoComponentComponent },
                           { path: 'AddMobile', component: AddMobileComponent },
                           { path: 'AddUser', component: AddUserComponent },
                           { path: 'UserDetail', component: DisplayUserComponent },
                           { path: 'UserDetailService', component: DisplayUserServiceComponent },
                           { path: 'UserListJson', component: UserJsonListComponent },
                           { path: 'UserRest', component: UserRestComponent }
                           
                        ];
@NgModule({
  declarations: [
    AppComponent,
    MobileListComponent,
    MobileSearchComponent,
    DemoComponentComponent,
    AddMobileComponent,
    AddUserComponent,
    EqualValidator,
    DisplayUserComponent,
    DisplayUserServiceComponent,
    UserJsonListComponent,
    UserRestComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpModule
  ],
  providers: [UserJsonService,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
