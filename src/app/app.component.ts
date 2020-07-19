import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { GetdataService } from './services/getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'insta-dp';
  data: any;

  constructor(private getdata: GetdataService) {}

  ngOnInit(): void{
    
  }
  getUserData(f: NgForm) {
    var username = f.form.value.username
    this.getdata.getUserDetails(username).subscribe(
      (retData) => {
        this.data = retData;
      }
    )
  }
  
 
}
