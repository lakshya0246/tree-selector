import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from '../interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() tree: Tree;
  @Output() selected = new EventEmitter<any>();
  showChild: boolean;

  constructor() { }

  ngOnInit(): void { }

  onSelect(childValue: string[], value: string) {
    this.showChild = false;
    this.selected.emit([value, ...childValue])
  }
}
