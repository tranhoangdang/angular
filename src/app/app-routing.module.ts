import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerHomeComponent } from './owner/owner-home/owner-home.component';
import { OwnerManageComponent } from './owner/owner-manage/owner-manage.component';
import { OwnerMessageComponent } from './owner/owner-message/owner-message.component';
import { ChangePasswordComponent } from './student/change-password/change-password.component';
import { DetailComponent } from './student/detail/detail.component';
import { HomeComponent } from './student/home/home.component';
import { InformationComponent } from './student/information/information.component';
import { LoginComponent } from './student/login/login.component';
import { SearchComponent } from './student/search/search.component';
import { StorageComponent } from './student/storage/storage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tim-thue', component: SearchComponent },
  { path: 'chi-tiet', component: DetailComponent },
  { path: 'BDS-yeu-thich', component: StorageComponent },
  { path: 'dang-nhap', component: LoginComponent },
  { path: 'thong-tin', component: InformationComponent },
  { path: 'doi-mat-khau', component: ChangePasswordComponent },
  { path: 'owner', component: OwnerHomeComponent },
  { path: 'owner/quan-ly-tin', component: OwnerManageComponent },
  { path: 'owner/tin-nhan', component: OwnerMessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
