import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from '../interfaces';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit {

  @Input() tree: Tree;
  @Output() selected = new EventEmitter<string[]>();
  selectIsOpen: boolean;

  constructor() { }

  ngOnInit(): void { }

  onSelect(value: string[]) {
    this.selectIsOpen = false;
    this.selected.emit(value);
  }

}