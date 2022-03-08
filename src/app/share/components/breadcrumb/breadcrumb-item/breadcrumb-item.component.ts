import { Component, Input, OnInit, Optional } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb.component';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.less'],
})
export class BreadcrumbItemComponent implements OnInit {
  myContext = { $implicit: 'World', my: 'svet' };
  @Input() Separator = '>'
  constructor(@Optional() readonly parent: BreadcrumbComponent) { }

  ngOnInit(): void {
  }

}
