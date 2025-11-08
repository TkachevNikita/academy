import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ButtonComponent,
  HeaderComponent,
  IconComponent,
} from '@academy/shared';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@Component({
  imports: [
    RouterModule,
    ButtonComponent,
    HeaderComponent,
    IconComponent,
    MainLayoutComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
