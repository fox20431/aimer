import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'sakana-widget',
  templateUrl: './sakana.component.html',
  styleUrls: ['./sakana.component.scss']
})
export class SakanaComponent implements OnInit, AfterViewInit {

	@ViewChild('pillar')
	pillar!: ElementRef<HTMLCanvasElement>

  constructor() { }
	ngAfterViewInit(): void {
		const width = 200;
		const height = 200;
		const superRes = 1;
		
		const dpr = (window.devicePixelRatio || 1) * superRes;
		const renderWidth = width * dpr;
		const renderHeight = height * dpr;
		this.pillar.nativeElement.width = renderWidth;
		this.pillar.nativeElement.height = renderHeight;
		this.pillar.nativeElement.style.width = width + 'px';
		this.pillar.nativeElement.style.height = height + 'px';
		const ctx = this.pillar.nativeElement.getContext('2d');
		ctx!.setTransform(1, 0, 0, 1, 0, 0);
		ctx!.scale(dpr, dpr);
	}

  ngOnInit(): void {

  }

}
