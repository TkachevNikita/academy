import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CoursesCardComponent } from '@academy/courses';
import { ButtonComponent, TextareaComponent } from '@academy/shared';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CoursesCardComponent,
    ButtonComponent,
    TextareaComponent,
    ReactiveFormsModule,
  ],
})
export class CoursesPageComponent {
  public courses = [
    {
      id: '1',
      title: 'Бизнес аналитика',
      description: '720 часов, квалификация — бизнес аналитик',
    },
    {
      id: '2',
      title: 'Системная аналитика',
      description: '720 часов, квалификация — системный аналитик',
    },
    {
      id: '3',
      title: 'Прикладная информатика ',
      description:
        '720/1080 часов, квалификация — специалист по иформационным системам',
    },
    {
      id: '4',
      title: 'Управление IT-проектами',
      description:
        '720 часов, квалификация — руководитель проектов в области IT',
    },
    {
      id: '5',
      title: 'Программная инженерия',
      description: '720/1080 часов, квалификация — программист',
    },
    {
      id: '5',
      title: 'Прикладной искусственный интеллект',
      description: '720 часов, квалификация — специалист по большим данным',
    },
  ];

  public textEditable = signal(false);
  public textValue = signal(
    'Все программы составлены с учетом последних достижений науки и технологий, требований рынка труда, содержат в себе только актуальную и практическую информацию.',
  );

  public textControl = new FormControl(this.textValue(), { nonNullable: true });

  public toggleText(): void {
    this.textEditable.set(!this.textEditable());
  }

  public updateText(): void {
    this.textValue.set(this.textControl.value);
    this.toggleText();
  }
}
