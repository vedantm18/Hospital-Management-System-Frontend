import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  id!: number;
  medicine: Medicine = new Medicine();

  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.medicineService.getMedicineById(this.id).subscribe(data => {
      this.medicine = data;
    });

  }

  onSubmit(): void {

    this.medicineService.updateMedicine(this.id, this.medicine).subscribe(() => {
      this.router.navigate(['/view-medicine']);
    });

  }

}