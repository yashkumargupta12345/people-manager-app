import { Routes } from '@angular/router';
import { PeopleListComponent } from './people-list.component';
import { PersonEditComponent } from './person-edit.component';
import { PersonDeleteComponent } from './person-delete.component';
import { PersonCreateComponent } from './person-create.component';


export const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'create', component: PersonCreateComponent },
  { path: 'edit/:id', component: PersonEditComponent },
  { path: 'delete/:id', component: PersonDeleteComponent }
];