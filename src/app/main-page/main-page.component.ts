import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateHabitDialogComponent } from './create-habit/create-habit-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { NgFor } from '@angular/common';
import { HeaderMainComponent } from '../header-main/header-main.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    NgFor,
    HeaderMainComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  private readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateHabitDialogComponent, {
      width: '600px',
      height: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  days: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
  ];

  habits = [
    { name: 'Habit 1', goal: 30, achieved: 15 },
    { name: 'Habit 2', goal: 20, achieved: 10 },
  ];

  displayedColumns: string[] = ['name', 'goal', 'achieved']; // Define columns here
}
