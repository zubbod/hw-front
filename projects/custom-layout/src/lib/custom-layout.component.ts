import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-layout',
  template: `
    <p>
      custom-layout works!
    </p>
  `,
  styles: [
  ]
})
export class CustomLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
