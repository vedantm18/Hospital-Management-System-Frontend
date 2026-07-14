import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

 private baseUrl = "https://hospital-management-system-backend-production-9785.up.railway.app/api/v3/medicines";

  constructor(private httpClient: HttpClient) { }

  getMedicines(): Observable<Medicine[]> {
    return this.httpClient.get<Medicine[]>(this.baseUrl);
  }

  createMedicine(medicine: Medicine): Observable<Medicine> {
    return this.httpClient.post<Medicine>(this.baseUrl, medicine);
  }

  // Get medicine by ID
  getMedicineById(id: number): Observable<Medicine> {
    return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }

  // Update medicine
  updateMedicine(id: number, medicine: Medicine): Observable<Medicine> {
    return this.httpClient.put<Medicine>(`${this.baseUrl}/${id}`, medicine);
  }
  
  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}