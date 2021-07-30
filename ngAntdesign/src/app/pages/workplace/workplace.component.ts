import { Component, OnInit } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit {

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
  }
  size: 'large' | 'small' | 'default' = 'default';
  hGutter = 16;
  vGutter = 16;
  count = 4;
  array = new Array(this.count);
  marksHGutter: NzMarks = {
    8: '8',
    16: '16',
    24: '24',
    32: '32',
    40: '40',
    48: '48'
  };
  marksVGutter: NzMarks = {
    8: '8',
    16: '16',
    24: '24',
    32: '32',
    40: '40',
    48: '48'
  };
  marksCount: NzMarks = {
    2: '2',
    3: '3',
    4: '4',
    6: '6',
    8: '8',
    12: '12'
  };
  reGenerateArray(count: number): void {
    this.array = new Array(count);
  }
  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }
}
