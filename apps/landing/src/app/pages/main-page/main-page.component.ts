import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';
import { ButtonComponent, IconComponent } from '@academy/shared';

@Component({
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MainLayoutComponent, ButtonComponent, IconComponent],
})
export class MainPageComponent {
  @ViewChild('about')
  public aboutSection!: ElementRef;

  public scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
