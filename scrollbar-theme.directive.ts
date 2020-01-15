import {
  Directive,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appScrollbarTheme]',
})
export class ScrollbarThemeDirective {

  constructor(el: ElementRef) {
    const stylesheet = `
      ::-webkit-scrollbar {
        width: 7px;
      }
        ::-webkit-scrollbar-track {
        background: transparent;
      }
        ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: linear-gradient(var(--ion-color-light-tint), var(--ion-color-light));
        border: 4px solid #999999;
      }
        ::-webkit-scrollbar-thumb:hover {
      }
    `;

    const styleElement = el.nativeElement.shadowRoot.querySelector('style');

    if ( styleElement ) {
      styleElement.append(stylesheet);
    } else {
      const barStyle = document.createElement('style');
      barStyle.append(stylesheet);
      el.nativeElement.shadowRoot.appendChild(barStyle);
    }
  }
}
