import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarItem {
  label: string;
  icon?: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, RouterLinkActive, RouterLink],
})
export class SidebarComponent {
  items: SidebarItem[] = [
    {
      label: 'Курсы',
      link: 'courses',
      icon: 'assignment_turned_in',
    },
    {
      label: 'Профессии',
      link: 'professions',
      icon: 'engineering',
    },
  ];
}
