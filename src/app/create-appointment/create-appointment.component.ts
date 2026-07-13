import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {

  appointment: Appointment = new Appointment();

  constructor(
    private appointmentService: AppointmentService,
    private router: Router
  ) { }

  saveAppointment(): void {
    this.appointmentService.createAppointment(this.appointment).subscribe({
      next: (data) => {
        console.log(data);
        this.goToAppointment();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  onSubmit(): void {
  console.log(this.appointment);
  this.saveAppointment();
}
  goToAppointment(): void {
    this.router.navigate(['/appointmentlist']);
  }

}