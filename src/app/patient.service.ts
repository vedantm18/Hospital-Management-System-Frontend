import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl ="https://hospital-management-system-backend-production-9785.up.railway.app/api/v1/patients";

  constructor(private httpClient: HttpClient) { }

  // Get all patients
  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseUrl}/patients`);
  }

  // Create patient
  createPatient(patient: Patient): Observable<Patient> {
    return this.httpClient.post<Patient>(`${this.baseUrl}/insert`, patient);
  }

  // Delete patient
  deletePatient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/patients/${id}`);
  }

  getPatientById(id: number): Observable<Patient> {
  return this.httpClient.get<Patient>(`${this.baseUrl}/patients/${id}`);
}
}