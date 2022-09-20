import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tmpl-number',
  templateUrl: './tmpl-number.component.html',
  styleUrls: ['./tmpl-number.component.css'],
})
export class TmplNumberComponent implements OnInit {
  @Input() counters: number[];
  @Input() tmplCustom: TemplateRef<any>;
  constructor() {}

  ngOnInit() {}
}
