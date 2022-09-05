import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

	title = "纪念日"

	seconds: number = new Date().getSeconds()

  constructor() { 
		setInterval(() => {
			this.seconds = new Date().getSeconds()
		}, 200)
	}
	
	ngAfterViewInit(): void {
	}

  ngOnInit(): void {
  }

}
