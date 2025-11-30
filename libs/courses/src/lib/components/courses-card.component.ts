import { ChangeDetectionStrategy, Component, input } from '@angular/core';

// todo протипизировать согласно контрактам с бэка
interface ICourse {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrl: './courses-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesCardComponent {
  public course = input.required<ICourse>();
}
