import { Component, OnInit, Input } from '@angular/core';
import { Vr } from 'src/app/models/vr';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vr-list-item',
  templateUrl: './vr-list-item.component.html',
  styleUrls: ['./vr-list-item.component.scss']
})
export class VrListItemComponent implements OnInit {
  faRunning = faRunning;
  @Input() vr: Vr;

  constructor() { }

  ngOnInit() {
  }

}
