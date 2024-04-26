import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ObtenertodosComponent } from './obtenertodos/obtenertodos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ObtenertodosComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abril25';
}
