import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseUrl = "https://hospital-management-system-backend-production-9785.up.railway.app/api/v1/patients";

  constructor(private httpClient: HttpClient) { }

  // Get all appointments
  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}/appointments`);
  }

  // Create appointment
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(
      `${this.baseUrl}/insert`,
      appointment
    );
  }

  // Delete appointment
  deleteAppointment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/appointments/${id}`);
  }
}