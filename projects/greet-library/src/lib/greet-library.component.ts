import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-greet-library',
  template: `
    <p>
      greet-library works!
    </p>
  `,
  styles: [
  ]
})
export class GreetLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
