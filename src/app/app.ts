import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AsyncPipe, CommonModule, NgOptimizedImage } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Principal } from "./principal/principal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    RouterModule, MatSidenavModule, MatToolbarModule, MatIconModule, FormsModule, MatListModule,
    CommonModule, MatProgressBarModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule,
    MatDialogModule, MatExpansionModule, FontAwesomeModule, Principal]
,  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('videotubeary');
}
