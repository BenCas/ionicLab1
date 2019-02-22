import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  text : string = "";
  post = [];

  createPost(){
    this.post.push(this.text); //push the text to array
    this.text=""; //clear the text

  }
}
