import { Component, Input, OnInit } from '@angular/core';
import { Tree } from '../interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() tree: Tree;

  constructor() { }

  ngOnInit(): void { }

}
