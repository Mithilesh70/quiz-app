import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './error.component.html',
})
export default class ErrorComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
