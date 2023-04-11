import { Component, Input } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-number-container',
  templateUrl: './number-container.component.html',
  styleUrls: ['./number-container.component.css']
})
export class NumberContainerComponent {
count: any;
    constructor(public counterService: CounterService){}
}
