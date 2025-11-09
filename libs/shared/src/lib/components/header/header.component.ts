import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownMenuComponent } from '../UI/dropdown-menu/dropdown-menu.component';
import { ButtonComponent } from '../UI/button/button.component';

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
