import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from './people.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-people-list',
  template: `
    <div class="people-list-container">
        <div class="header-row">
            <h2>People List</h2>
            <button class="add-btn" (click)="add()">+ Add</button>
        </div>
       <table class="people-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let person of people()">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.gender }}</td>
            <td>{{ person.phone }}</td>
            <td>
              <button class="edit-btn" (click)="edit(person.id)">Edit</button>
              <button class="delete-btn" (click)="delete(person.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
  
    .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  .add-btn {
    background: #43a047;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .add-btn:hover {
    background: #388e3c;
  }
    
    .people-list-container {
      background: #fff;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 16px rgba(25, 118, 210, 0.08);
      margin-top: 2rem;
    }
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #1976d2;
      letter-spacing: 1px;
    }
    .people-table {
      width: 100%;
      border-collapse: collapse;
      background: #fafbfc;
      border-radius: 8px;
      overflow: hidden;
    }
    th, td {
      padding: 1rem;
      border-bottom: 1px solid #e0e0e0;
      text-align: left;
    }
    th {
      background: #f1f1f1;
      color: #1976d2;
      font-weight: 600;
      font-size: 1.05rem;
    }
    tr:last-child td {
      border-bottom: none;
    }
    tr:hover {
      background: #f5faff;
      transition: background 0.2s;
    }
    .edit-btn {
      background: #1976d2;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 0.4rem 1rem;
      margin-right: 0.5rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .edit-btn:hover {
      background: #1565c0;
    }
    .delete-btn {
      background: #e53935;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 0.4rem 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .delete-btn:hover {
      background: #b71c1c;
    }
  `],
  standalone: true,
  imports: [NgFor]
})
export class PeopleListComponent {
  people: ReturnType<PeopleService['getPeople']>;

  constructor(private peopleService: PeopleService, private router: Router) {
    this.people = this.peopleService.getPeople();
  }


  add() {
    this.router.navigate(['/create']);
  }

  edit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  delete(id: number) {
    this.router.navigate(['/delete', id]);
  }
}