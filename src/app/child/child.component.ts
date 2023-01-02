import { Component, Input, Output, OnChanges, OnInit,  EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges  {

  constructor(private commonService:CommonService) { }

  @Input() count:number=0

  @Output() eventItems = new EventEmitter()

  ngOnInit(): void {
  }

  ngOnChanges(args:any){
    console.log(args);
    
    // console.log("currentValue",args.count.currentValue);
    // console.log("Previous Value",args.count.previousValue);
    
  }
  ngDoCheck(){
    console.log("changes made");
    
  }

  getData(){
    this.eventItems.emit("from child")
  }

  passData(){
    this.commonService.dataSharing$.next("1")
    this.commonService.dataSharing$.next("2")
    
    
  }

}


