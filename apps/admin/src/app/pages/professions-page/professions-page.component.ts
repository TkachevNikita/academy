import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CoursesCardComponent } from '@academy/courses';
import { ButtonComponent, TextareaComponent } from '@academy/shared';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './professions-page.component.html',
  styleUrl: './professions-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CoursesCardComponent,
    ButtonComponent,
    TextareaComponent,
    ReactiveFormsModule,
  ],
})
// todo по сути копия странички с курсов. надо сделать универсальный компонент для этого всего
export class ProfessionsPageComponent {
  public professions = [
    {
      id: '1',
      title: 'Имитационное моделирование в AnyLogic',
      description: '72 часа, 12 вебинаров, от 43200 руб.',
    },
    {
      id: '2',
      title: 'Управление данными на SQL',
      description: '72 часа, 8-12 вебинаров, от 5400 руб.',
    },
    {
      id: '3',
      title: 'Моделирование бизнес-процессов ',
      description:
        'BPMN, UML Activity и State Chart, DFD, SADT, анализ и оптимизация',
    },
  ];

  public textEditable = signal(false);
  public textValue = signal(
    'Курсы повышения квалификации - это краткосрочные курсы, на которых вы получите необходимые профессиональные компетенции в выбранной области.',
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
