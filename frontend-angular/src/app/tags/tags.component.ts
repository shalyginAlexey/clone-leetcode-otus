import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class TagsComponent {
  tagForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tagForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.tagForm.valid) {
      console.log(this.tagForm.value);
    }
  }
}
