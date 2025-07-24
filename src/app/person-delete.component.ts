import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-person-delete',
  template: `
    <h2>Delete Person</h2>
    <p>Are you sure you want to delete this person?</p>
    <button (click)="confirm()">Yes</button>
    <button (click)="cancel()">No</button>
  `,
  standalone: true
})
export class PersonDeleteComponent {
  personId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peopleService: PeopleService
  ) {
    this.route.params.subscribe(params => {
      this.personId = +params['id'];
    });
  }

  confirm() {
    this.peopleService.deletePerson(this.personId);
    this.router.navigate(['/']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}