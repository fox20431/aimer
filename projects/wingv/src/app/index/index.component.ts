import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

	title = "纪念日"

	seconds: number = new Date().getSeconds()
	minutes: number = new Date().getMinutes()

  constructor() { 
		setInterval(() => {
			this.seconds = new Date().getSeconds()
			this.minutes = new Date().getMinutes()
		}, 200)
	}
	
	ngAfterViewInit(): void {
	}

  ngOnInit(): void {
  }

}
