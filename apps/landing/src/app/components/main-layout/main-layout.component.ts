import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent, IconComponent } from '@academy/shared';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, IconComponent],
})
export class MainLayoutComponent {}
