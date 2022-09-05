import { AfterViewInit, Component, Directive, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'flip-board',
	templateUrl: './flip-board.component.html',
	styleUrls: ['./flip-board.component.scss'],
	encapsulation: ViewEncapsulation.ShadowDom
})
export class FlipBoardComponent implements OnInit, AfterViewInit {

	@ViewChild('top')
	topElement!: ElementRef<HTMLParagraphElement>;
	@ViewChild('flodBox')
	flodBoxElement!: ElementRef<HTMLParagraphElement>;
	@ViewChild('front')
	frontElement!: ElementRef<HTMLParagraphElement>;
	@ViewChild('back')
	backElement!: ElementRef<HTMLParagraphElement>;
	@ViewChild('bottom')
	bottomElement!: ElementRef<HTMLParagraphElement>;

	currentValue = 1

	@Input()
	value!: number

	constructor() {
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		
		const transform180 = (seconds: any) => {
			let timer: any;
			this.flodBoxElement.nativeElement.style.transition = "transform 0s"; //使其瞬间返回到 0deg
			this.flodBoxElement.nativeElement.style.transform = "perspective(200px) rotateX(0deg)";
			// frontNode 与 bottomNode 的显示
			this.frontElement.nativeElement.innerHTML = seconds;
			this.bottomElement.nativeElement.innerHTML = seconds;
			timer = setTimeout(() => {
				this.flodBoxElement.nativeElement.style.transition = "transform 0.9s"; //缓个100ms执行，0.9秒转完
				this.flodBoxElement.nativeElement.style.transform = "perspective(200px) rotateX(-180deg)";
				this.currentValue = this.value + 1;
				clearTimeout(timer);
			}, 100)
		}
		setInterval(() => {
			let seconds = new Date().getSeconds();
			transform180(seconds);
		}, 1000);
	}

}
