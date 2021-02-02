import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-file-actions',
  templateUrl: './file-actions.component.html',
  styleUrls: ['./file-actions.component.scss'],
})
export class FileActionsComponent implements OnInit {
  @Input() file: any;

  constructor() {}

  ngOnInit(): void {}
}
