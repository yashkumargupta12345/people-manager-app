import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from './people.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-create',
  template: `
    <h2>Add Person</h2>
    <form [formGroup]="form" (ngSubmit)="save()" class="edit-form">
      <div class="form-group">
        <label>Name:</label>
        <input formControlName="name" type="text" required />
      </div>
      <div class="form-group">
        <label>Gender:</label>
        <select formControlName="gender" required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div class="form-group">
        <label>Age:</label>
        <input formControlName="age" type="number" min="0" required />
      </div>
      <div class="form-group">
        <label>Phone:</label>
        <input formControlName="phone" type="text" required />
      </div>
      <div class="form-actions">
        <button type="submit" [disabled]="form.invalid">Create</button>
        <button type="button" (click)="cancel()">Cancel</button>
      </div>
    </form>
  `,
  styles: [`
    .edit-form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      max-width: 400px;
      margin: 0 auto;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
    }
    input, select {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
    button[type="submit"]:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  `],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class PersonCreateComponent {
  form;

  constructor(
    private router: Router,
    private peopleService: PeopleService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [''],
      gender: [''],
      age: [0],
      phone: ['']
    });
  }

  save() {
    const value = this.form.value;
    this.peopleService.addPerson({
      name: value.name ?? '',
      gender: value.gender ?? '',
      age: value.age ?? 0,
      phone: value.phone ?? ''
    });
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}