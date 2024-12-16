import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMainComponent {}
