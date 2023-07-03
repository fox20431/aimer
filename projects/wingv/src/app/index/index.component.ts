import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

function calcDaysFromMeeting() {
	let meetingTimestamp = new Date("6/12/23").getTime();
	let nowTimestamp = Date.now()
	let interval = nowTimestamp - meetingTimestamp
	return Math.floor(interval / 1000 / 60 / 60 / 24);
}

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

	@ViewChild('bgm')
	bgm!: ElementRef<HTMLAudioElement>
	
	title = "纪念日"
	seconds: number = new Date().getSeconds()
	minutes: number = new Date().getMinutes()
	hours: number = new Date().getHours()
	days: number = calcDaysFromMeeting()

	constructor() {
		setInterval(() => {
			this.seconds = new Date().getSeconds()
			this.minutes = new Date().getMinutes()
			this.hours = new Date().getHours()
			this.days = calcDaysFromMeeting()
		}, 200)
	}

	ngAfterViewInit(): void {
		// this.bgm.nativeElement.play()
	}

	ngOnInit(): void {
	}

}
