import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ThemeComponent } from './theme.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThemeComponent,
    HeaderComponent
  ],
  exports: [
    ThemeComponent,
    HeaderComponent
  ]
})
export class ThemeModule { }
