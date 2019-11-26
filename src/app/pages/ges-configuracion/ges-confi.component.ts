import { Component } from '@angular/core';

@Component({
  selector: 'ngx-ges-confi',
  template: `<router-outlet></router-outlet>`,
})
export class GesConfComponent {
  constructor() {
    console.log('Estoy AQui')
  }
}
