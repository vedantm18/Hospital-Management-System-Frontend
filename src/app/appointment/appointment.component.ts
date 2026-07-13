import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe({
      next: (data: Appointment[]) => {
        this.appointments = data;
      },
      error: (error) => {
        console.error('Error fetching appointments:', error);
      }
    });

  }
  delete(id: number) {
  this.appointmentService.deleteAppointment(id).subscribe(data => {
    console.log(data);
    this.getAppointments();
  });
}

}