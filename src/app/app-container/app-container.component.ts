import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
	selector: 'app-app-container',
	templateUrl: './app-container.component.html',
	styleUrls: ['./app-container.component.css']
})
export class AppContainerComponent implements OnInit {

	constructor() { }

	teamPosition = 0;

	bannerImages = [
		{
			img: 'banner1',
			title: '',
			desc: ''
		},
		{
			img: 'banner2',
			title: '',
			desc: ''
		},
		{
			img: 'banner3',
			title: '',
			desc: ''
		},
		{
			img: 'banner4',
			title: '',
			desc: ''
		},
	];

	teamFull = [
		{
			position: 'President',
			name: 'Nirodha Suchinthana',
			img: 'assets/img/team/0.jpg',
			fb: 'https://www.facebook.com/nirodha.suchinthana',
			linkedin: 'https://www.linkedin.com/in/nirodha-suchinthana-77a294137/',
			email: 'suchinthanaapn@gmail.com'
		},
		{
			position: 'Secretary',
			name: 'Chamin Jayasooriya',
			img: 'assets/img/team/1.jpg',
			fb: 'https://www.facebook.com/chameennayanashan.jayasuriya',
			linkedin: 'https://www.linkedin.com/in/chamin-jayasooriya/',
			email: 'cn96@live.com'
		},
		{
			position: 'Vice President',
			name: 'Shyaman Jayasundara',
			img: 'assets/img/team/2.jpg',
			fb: 'https://www.facebook.com/shyaman.madhawa',
			linkedin: 'https://www.linkedin.com/in/shyaman-jayasundara/',
			email: 'jmshyaman@eng.pdn.ac.lk'
		},
		{
			position: 'Senior Treasurer',
			name: 'Dr. Suneth Namal',
			img: 'assets/img/team/3.jpg',
			fb: 'https://www.facebook.com/suneth.namal',
			linkedin: 'https://www.linkedin.com/in/suneth-namal-b70b8688/',
			email: 'namal@ce.pdn.ac.lk'
		},
		{
			position: 'Junior Treasurer',
			name: 'Hashan Maliththa',
			img: 'assets/img/team/4.jpg',
			fb: 'https://www.facebook.com/hashanmaliththa.kh',
			linkedin: 'https://www.linkedin.com/in/maliththa-k-h-h-b34ab9167/',
			email: 'maliththamax3@gmail.com'
		},
		{
			position: 'Editor',
			name: 'Kaveesha Dilshani',
			img: 'assets/img/team/5.jpg',
			fb: 'https://www.facebook.com/profile.php?id=100008810613120',
			linkedin: 'https://www.linkedin.com/in/kaveesha-dilshani-9b3b79125/',
			email: 'kaveeshadilshani1@gmail.com'
		},
		{
			position: 'Committee Member',
			name: 'Sathyanga Tharana',
			img: 'assets/img/team/6.jpg',
			fb: 'https://www.facebook.com/sathyangat',
			linkedin: 'https://www.linkedin.com/in/stharana/',
			email: 'stharana2013@gmail.com'
		},
		{
			position: 'Committee Member',
			name: 'Gayan Ranaweera',
			img: 'assets/img/team/7.jpg',
			fb: 'https://www.facebook.com/profile.php?id=100005541467536',
			linkedin: 'https://www.linkedin.com/in/gayan-ranaweera-295636172/',
			email: 'gayantrr@gmail.com'
		},
		{
			position: 'Committee Member',
			name: 'Chandima Samarasinghe',
			img: 'assets/img/team/8.jpg',
			fb: 'https://facebook.com/chandima.b.samarasinghe',
			linkedin: 'https://linkedin.com/in/chandimab',
			email: 'chandima.edu@gmail.com'
		},
		{
			position: 'Committee Member',
			name: 'Gayal Laksara',
			img: 'assets/img/team/9.jpg',
			fb: 'https://www.facebook.com/gayal.laksara',
			linkedin: 'https://www.linkedin.com/in/gayal-laksara-218aa415a/',
			email: 'Gayallaksara1996@gmail.com'
		},
		{
			position: 'Committee Member',
			name: 'Anjana Illankoon',
			img: 'assets/img/team/male.jpg',
			fb: '',
			linkedin: '',
			email: '&nbsp;'
		},
		{
			position: 'Committee Member',
			name: 'Sandushi Dileka',
			img: 'assets/img/team/11.jpg',
			fb: 'https://www.facebook.com/sandushi.dileka',
			linkedin: '',
			email: 'sandushidileka2@gmail.com'
		}
	];

	team = [];

	ngOnInit() {
		this.team = this.teamFull.slice(0, 3);
		this.triggerTeamAnimation();
	}

	triggerTeamAnimation() {
		setInterval(() => {
			this.team = this.teamFull.slice(this.teamPosition, this.teamPosition + 3);
			if ((this.teamFull.length - this.teamPosition) === 3) {
				this.teamPosition = 0;
			} else {
				this.teamPosition += 3;
			}
		}, 2500);
	}

}
