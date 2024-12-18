import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TagsComponent } from './tags/tags.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: '**', redirectTo: '/tasks' },
];
