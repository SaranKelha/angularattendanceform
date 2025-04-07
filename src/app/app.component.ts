import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'attendanceform';
  
}
