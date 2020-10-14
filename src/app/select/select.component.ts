import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tree } from '../interfaces';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() tree: Tree;
  @Output() selected = new EventEmitter<any>();
  showChildrenBoolean: boolean;
  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void { }

  showChildOrSelect(i) {

  }

  onSelect(childValue: string[], value: string) {
    this.el.nativeElement.style.display = 'none';
    this.selected.emit([value, ...childValue])
  }

}
