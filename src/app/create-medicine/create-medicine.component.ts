import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.css']
})
export class CreateMedicineComponent {

  medicine: Medicine = new Medicine();

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) { }

  saveMedicine(): void {
    this.medicineService.createMedicine(this.medicine).subscribe({
      next: (data) => {
        console.log('Medicine saved successfully!', data);
        this.goToViewMedicine();
      },
      error: (error) => {
        console.error('Error while saving medicine:', error);
      }
    });
  }

  onSubmit(): void {
    console.log(this.medicine);
    this.saveMedicine();
  }

  goToViewMedicine(): void {
    this.router.navigate(['/view-medicine']);
  }
}