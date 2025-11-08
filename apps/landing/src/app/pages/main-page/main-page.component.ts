import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';
import { ButtonComponent } from '@academy/shared';

@Component({
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainLayoutComponent, ButtonComponent],
})
export class MainPageComponent {}
