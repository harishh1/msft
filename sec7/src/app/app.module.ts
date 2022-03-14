import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicHighlightDirective } from 'basic-highlight/basic-highlight.directive';

import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
