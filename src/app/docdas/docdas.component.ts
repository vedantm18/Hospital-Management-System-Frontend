import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdas',
  templateUrl: './docdas.component.html',
  styleUrls: ['./docdas.component.css']
})
export class DocdasComponent implements OnInit {

  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private router: Router,
    private docauth: DocauthService
  ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatientList().subscribe({
      next: (data: Patient[]) => {
        this.patients = data;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  delete(id: number): void {

    if (confirm("Are you sure you want to delete this patient?")) {

      this.patientService.deletePatient(id).subscribe({
        next: () => {
          console.log("Patient deleted successfully");
          this.getPatients();
        },
        error: (error: any) => {
          console.error(error);
        }
      });

    }
  }

  view(id: number): void {
    this.router.navigate(['/view-patient', id]);
  }

  logout(): void {

    this.docauth.logOut();

    alert("Logged out successfully");

    this.router.navigate(['/home']);
  }

}