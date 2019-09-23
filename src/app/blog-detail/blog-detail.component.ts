import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-blog-detail',
	templateUrl: './blog-detail.component.html',
	styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {

	constructor() { }

	ngOnInit() {
		// to fix the scrolling issue in blog detail page
		document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
	}

	ngOnDestroy() {
		document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
	}

}
