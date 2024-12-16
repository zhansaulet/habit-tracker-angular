import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-auth',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './header-auth.component.html',
  styleUrl: './header-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderAuthComponent {}
