import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.dataSharing$.subscribe(data=> console.log(data)
    )
  }

}
