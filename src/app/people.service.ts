import { Injectable, signal } from '@angular/core';
import { Person } from './person.model';

@Injectable({ providedIn: 'root' })
export class PeopleService {
private people = signal<Person[]>([
  { id: 1, name: 'Alice', age: 28, gender: 'Female', phone: '1234567890' },
  { id: 2, name: 'Bob', age: 32, gender: 'Male', phone: '9876543210' }
]);

  getPeople() {
    return this.people.asReadonly();
  }

  getPerson(id: number) {
    return this.people().find(p => p.id === id);
  }

  addPerson(person: Omit<Person, 'id'>) {
  const people = this.people();
  const newId = people.length ? Math.max(...people.map(p => p.id)) + 1 : 1;
  this.people.update(list => [...list, { ...person, id: newId }]);
}

  updatePerson(updated: Person) {
    this.people.update(list =>
      list.map(p => (p.id === updated.id ? updated : p))
    );
  }

  deletePerson(id: number) {
    this.people.update(list => list.filter(p => p.id !== id));
  }
}