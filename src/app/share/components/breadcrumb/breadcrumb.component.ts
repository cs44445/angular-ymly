import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
  encapsulation: ViewEncapsulation.None//通过父级组件控制子组件的样式,父组件里面样式默认不会影响子组件的样式，，所以需要添加这个配置
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
