import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from './interfaces';

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

  ngOnInit(): void {
    if(!this.tree) console.warn("The tree select component requires an input 'tree' to function.")
  }

  onSelect(value: string[]) {
    this.selectIsOpen = false;
    this.selected.emit(value);
  }

}