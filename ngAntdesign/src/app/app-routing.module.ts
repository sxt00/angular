import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicformComponent } from './pages/basicform/basicform.component';
import { MonitorComponent } from "./pages/monitor/monitor.component";
import { WorkplaceComponent } from './pages/workplace/workplace.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'monitor',component:MonitorComponent},
  { path: 'form',component: BasicformComponent},
  { path: 'workpalce',component:WorkplaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
