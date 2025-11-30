import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent, SidebarComponent } from '@academy/shared';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
})
export class AdminLayoutComponent {}
