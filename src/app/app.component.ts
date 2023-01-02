import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  counts:number=0


  data:any
  updateCount(){
    this.counts++
  }

  receiveData(e:any){
    //this.data = e
      console.log(e);
         
  }

}
