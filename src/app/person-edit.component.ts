import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from './people.service';
import { Person } from './person.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  template: `
    <h2>Edit Person</h2>
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
        <button type="submit" [disabled]="form.invalid">Save</button>
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
export class PersonEditComponent {
  form;
  personId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: [''],
      gender: [''],
      age: [0],      // <-- age as number
      phone: ['']
    });
    this.route.params.subscribe(params => {
      this.personId = +params['id'];
      const person = this.peopleService.getPerson(this.personId);
      if (person) this.form.patchValue(person);
    });
  }

  save() {
    this.peopleService.updatePerson({
      id: this.personId,
      ...this.form.value
    } as Person);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}