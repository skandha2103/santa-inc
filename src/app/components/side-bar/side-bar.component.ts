import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{

  constructor() { 
  }

  ngOnInit(): void {
    this.openNav()
  }

  openNav():void {
    (<HTMLInputElement>document.getElementById("mySidebar")).style.width = "250px";
    (<HTMLInputElement>document.getElementById("main")).style.marginLeft  = "250px";
  }

  closeNav():void{
    (<HTMLInputElement>document.getElementById("mySidebar")).style.width = "0";
    (<HTMLInputElement>document.getElementById("main")).style.marginLeft = "0";
  }
  

}
