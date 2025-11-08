import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, DropdownMenuComponent],
})
export class HeaderComponent {
  public aboutItems = [
    { label: 'О компании', link: '/about' },
    { label: 'Преподавательский состав', link: '/design' },
    { label: 'Сведения об образовательной организации', link: '/marketing' },
    { label: 'Контакты', link: '/analytics' },
  ];
}
