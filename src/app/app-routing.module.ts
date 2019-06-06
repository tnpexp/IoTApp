import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'sign-in', loadChildren: './Login/sign-in/sign-in.module#SignInPageModule' },
  { path: 'register', loadChildren: './Login/register/register.module#RegisterPageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
