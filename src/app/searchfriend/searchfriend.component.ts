import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchfriend',
  templateUrl: './searchfriend.component.html',
  styleUrls: ['./searchfriend.component.css']
})
export class SearchfriendComponent implements OnInit {
  searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.searchValue);
  }

}
