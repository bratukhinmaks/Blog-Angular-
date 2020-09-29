import { Injectable } from '@angular/core';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  counter = 0;
  constructor(private logSer: LogService) { }
  increase() {
    this.counter++;
    this.logSer.log(this.counter.toString());
  }
  decrease() {
    this.counter--;
    this.logSer.log(this.counter.toString());
  }
}
