import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // <-- ✅ Import this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // <-- ✅ Add RouterModule here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
