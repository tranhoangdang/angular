import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './student/components/nav/nav.component';
import { HomeComponent } from './student/home/home.component';
import { FooterComponent } from './student/components/footer/footer.component';
import { SearchComponent } from './student/search/search.component';
import { DetailComponent } from './student/detail/detail.component';
import { StorageComponent } from './student/storage/storage.component';
import { LoginComponent } from './student/login/login.component';
import { InformationComponent } from './student/information/information.component';
import { ChangePasswordComponent } from './student/change-password/change-password.component';
import { OwnerHomeComponent } from './owner/owner-home/owner-home.component';
import { OwnerNavComponent } from './owner/components/owner-nav/owner-nav.component';
import { OwnerManageComponent } from './owner/owner-manage/owner-manage.component';
import { OwnerMessageComponent } from './owner/owner-message/owner-message.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    DetailComponent,
    StorageComponent,
    LoginComponent,
    InformationComponent,
    ChangePasswordComponent,
    OwnerHomeComponent,
    OwnerNavComponent,
    OwnerManageComponent,
    OwnerMessageComponent,
    OwnerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
