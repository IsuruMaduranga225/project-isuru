import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
name = new FormControl();
description = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }
Save(){
  alert(this.name.value);
  
}

}
