import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public items = [];
 public newItem = "";
 public completed = [];
 public style1 = "";
 public style2 = "line-through"

 



 pushItem = function(){
   if(this.newItem != ""){
     this.items.push(this.newItem)
     this.newItem = "";
    }
 }

 removeItem = function(index){
   this.items.splice(index, 1);
 }

 completeItem = function(index){
  //  this.completed.push(this.index);
   this.items.splice(index,0);
  //  this.items.splice(index,1);
   if(this.style1 == "" || this.style1 == null){
      this.style = this.style2;
  
  }
 }
}
