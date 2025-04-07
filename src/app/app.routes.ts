import { Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { HomeComponent } from './home/home.component';
import { ManagetaskComponent } from './managetask/managetask.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'attendance',
        component:AttendanceComponent
    },
    {
        path:'managetask',
        component:ManagetaskComponent
    }
];
