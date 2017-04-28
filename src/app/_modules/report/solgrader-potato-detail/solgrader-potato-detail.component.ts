import { Potato } from '../../masterdata/_models/potato';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solgrader-potato-detail',
  templateUrl: './solgrader-potato-detail.component.html',
  styles: []
})
export class SolgraderPotatoDetailComponent implements OnInit {
 @Input() potato: Potato;

  constructor() { }

  ngOnInit() {
  }

}
