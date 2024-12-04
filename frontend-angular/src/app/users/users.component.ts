import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

interface User {
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
})
export class UsersComponent implements OnInit {
  users: User[] = [
    { email: 'user1@otus.com', role: 'user' },
    { email: 'user2@otus.com', role: 'admin' },
    { email: 'user3@otus.com', role: 'interviewer' },
  ];
  displayedColumns: string[] = ['email', 'role'];

  ngOnInit() {
    console.log('UsersComponent initialized');
  }

  onRoleChange(user: User) {
    console.log(user);
  }
}
