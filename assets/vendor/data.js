var app = angular.module("myApp", []);

app.controller("myAppController", function ($scope, $window) {

	$scope.firstName = 'Deepak';
	$scope.lastName = 'Kumar';
	$scope.fullName = $scope.firstName + ' ' + $scope.lastName;
	$scope.imageUrl = 'media/deepak_photo.jpg';
	$scope.doj = '2019-03-19'; 
	$scope.dob = '1997/08/20';
	$scope.about = `I am a Software Engineer with almost ${dateDiff($scope.doj)} of experience in technologies like Angular, NodeJs, MongoDB, React.js, etc. I have been fortunate to handle large to small-scale web applications.`;
	$scope.website = window.location.href;
	$scope.phone = '+91 889 667 3292';
	$scope.location = 'Kanpur, U.P. INDIA';
	$scope.age = getAge($scope.dob);
	$scope.degree = 'Bachelor of Technology';
	$scope.email = 'deepakkumarcopy@gmail.com';
	$scope.summary = 'Web Developer || Angular and JavaScript Developer || Angular, Ionic, JavaScript, TypeScript, ROR, MongoDB';

	$scope.skills = [
		{ name: 'HTML', performance: 90 },
		{ name: 'ANGULAR', performance: 90 },
		{ name: 'JAVASCRIPT', performance: 90 },
		{ name: 'IONIC DEVELOPMENT', performance: 90 },
		{ name: 'BOOTSTRAP', performance: 90 },
		{ name: 'ELECTRON JS', performance: 80 },
		{ name: 'LINUX', performance: 90 },
		{ name: 'NODE JS', performance: 80 },
		{ name: 'RUBY ON RAILS', performance: 50 },
		{ name: 'PHP', performance: 60 },
		{ name: 'TYPESCRIPT', performance: 90 },
		{ name: 'SOCKET', performance: 80 },
		{ name: 'SQL', performance: 80 },
		{ name: 'MONGODB', performance: 60 },
	];

	$scope.achievements = [
		{ paragraph: 'Got Star Performer Award in 2021' },
		{ paragraph: 'Got Star Team Award for SuperOne project in 2021' },
		{ paragraph: 'Achieved 2nd rank in an internal organization coding competition.' },
		{ paragraph: 'Winner in internal Organization Hackathon competition.' },
		{ paragraph: 'Runner-up in Dance competition in College.' },
		{ paragraph: 'Winner in Art competition in Fevicol Company.' },
		{ paragraph: 'Gold medal in Taekwondo state level competition' },
		{ paragraph: 'Costumer delight award for delivering a project.' },
		{ paragraph: 'Award for developing idea in to a project.' }
	];

	$scope.certifications = [
		{
			title: 'Star Performer Award',
			imageUrl_small: 'assets/certificates/small/w3villa_star_performer.jpg',
			imageUrl: 'assets/certificates/w3villa_star_performer.jpg',
		}, {
			title: 'Star Team Award (SuperOne)',
			imageUrl_small: 'assets/certificates/small/w3villa_star_team.jpg',
			imageUrl: 'assets/certificates/w3villa_star_team.jpg',
		}, {
			title: 'Advance Diploma In Computer Application',
			imageUrl_small: 'assets/certificates/small/data_expert_computer_diploma.jpg',
			imageUrl: 'assets/certificates/data_expert_computer_diploma.jpg',
		}, {
			title: 'Course On Computer Concepts',
			imageUrl_small: 'assets/certificates/small/ccc.jpg',
			imageUrl: 'assets/certificates/ccc.jpg',
		}, {
			title: 'B.tech Degree',
			imageUrl_small: 'assets/certificates/small/btech-degree.jpg',
			imageUrl: 'assets/certificates/btech-degree.jpg',
		}, {
			title: 'e.Soft Connect Certificate',
			imageUrl_small: 'assets/certificates/small/e_soft_project.jpg',
			imageUrl: 'assets/certificates/e_soft_project.jpg',
		}, {
			title: 'MyGov, Doordarshan Certificate',
			imageUrl_small: 'assets/certificates/small/government_meri_ganga.jpg',
			imageUrl: 'assets/certificates/government_meri_ganga.jpg',
		}, {
			title: 'Certificate Of Honor',
			imageUrl_small: 'assets/certificates/small/hindustan_education_fare.jpg',
			imageUrl: 'assets/certificates/hindustan_education_fare.jpg',
		}, {
			title: 'Cyber Security Awareness Program',
			imageUrl_small: 'assets/certificates/small/innovation_indeas_infotech_cyber_security.jpg',
			imageUrl: 'assets/certificates/innovation_indeas_infotech_cyber_security.jpg',
		}, {
			title: 'MPEC Dance Competition',
			imageUrl_small: 'assets/certificates/small/mpec_dance_competition.jpg',
			imageUrl: 'assets/certificates/mpec_dance_competition.jpg',
		}, {
			title: 'Diploma In Computer Hardware',
			imageUrl_small: 'assets/certificates/small/omitech.jpg',
			imageUrl: 'assets/certificates/omitech.jpg',
		}, {
			title: 'Android Application Training Certificate',
			imageUrl_small: 'assets/certificates/small/shreyanshi_consultancy_android.jpg',
			imageUrl: 'assets/certificates/shreyanshi_consultancy_android.jpg',
		}, {
			title: 'WorkShop On Python',
			imageUrl_small: 'assets/certificates/small/softpro_india_python.jpg',
			imageUrl: 'assets/certificates/softpro_india_python.jpg',
		}, {
			title: 'Gold Medal In Taekwondo State Level Competition',
			imageUrl_small: 'assets/certificates/small/taekwondo.jpg',
			imageUrl: 'assets/certificates/taekwondo.jpg',
		}, {
			title: 'HTML5 Workshop Certificate',
			imageUrl_small: 'assets/certificates/small/talentedge_html5.jpg',
			imageUrl: 'assets/certificates/talentedge_html5.jpg',
		}, {
			title: 'Certification Of Appreciation',
			imageUrl_small: 'assets/certificates/small/w3villa_appreciation_april_june.jpg',
			imageUrl: 'assets/certificates/w3villa_appreciation_april_june.jpg',
		}, {
			title: 'Certification Of Appreciation',
			imageUrl_small: 'assets/certificates/small/w3villa_appreciation_january_march.jpg',
			imageUrl: 'assets/certificates/w3villa_appreciation_january_march.jpg',
		}
	];

	$scope.educations = [
		{
			name: 'Bachelor of Technology',
			duration: '2015-2019',
			college: 'Maharana Pratap College of Engineering , Kanpur',
			message: 'I completed my graduation from here. and scored first division. also got placement from here.'
		}, {
			name: 'Intermediate',
			duration: '2012-2014',
			college: 'Dr. Chiranji Lal Rashtriya Inter College, Kanpur',
			message: 'I completed my Intermediate Education form here and scored first division.'
		}, {
			name: 'High School',
			duration: '2010-2012',
			college: 'Dr. Chiranji Lal Rashtriya Inter College, Kanpur',
			message: 'I completed my High School Education form here and scored first division.'
		},
	];

	$scope.experiences = [
		{
			company: 'Eka Software Solution PVT. LTD.',
			duration: 'Feb 2022 - present',
			destination: 'Software Engineer',
			message: 'I am working here as a Software Engineer and working on mainly on Angular.'
		}, {
			company: 'W3villa Technologies PVT. LTD.',
			duration: 'Mar 2019 - Jan 2022',
			destination: 'Software Developer',
			message: 'I have completed almost 3 years as Software Developer on here. and experience in multiple technologies ex: Angular, Ionic, Nodejs, javascript, MySQL, MongoDB.'
		}
	];

	$scope.links = [
		{
			name: 'twitter',
			class: 'bx bxl-twitter',
			href: 'https://twitter.com/DeepakjustD'
		}, {
			name: 'instagram',
			class: 'bx bxl-instagram',
			href: 'https://www.instagram.com/_.just_d._/'
		}, {
			name: 'linkedin',
			class: 'bx bxl-linkedin',
			href: 'https://www.linkedin.com/in/deepakkumartec/'
		}, {
			name: 'github',
			class: 'bx bxl-github',
			href: '//github.com/coderaman07'
		}, {
			name: 'facebook',
			class: 'bx bxl-facebook',
			href: 'https://www.facebook.com/deepakjustd/'
		}, {
			name: 'youtube',
			class: 'bx bxl-youtube',
			href: 'https://www.youtube.com/channel/UCyVulQQhax-EqRyTrEwZuvQ'
		}, {
			name: 'google',
			class: 'bx bxl-google',
			href: 'mailto:deepakkumarcopy@gmail.com'
		}, {
			name: 'whatsapp',
			class: 'bx bxl-whatsapp',
			href: 'https://wa.me/+918896673292'
		}, {
			name: 'dev-to',
			class: 'bx bxl-dev-to',
			href: 'https://dev.to/deepakjustd'
		}, {
			name: 'telegram',
			class: 'bx bxl-telegram',
			href: 'https://t.me/coderaman077',
		}, {
			name: 'reddit',
			class: 'bx bxl-reddit',
			href: 'https://reddit.com/u/deepakjustd'
		}, {
			name: 'spotify',
			class: 'bx bxl-spotify',
			href: 'https://open.spotify.com/user/31bfhdwq52tvay7znulzhihwg3ae'
		}
	];

	$scope.projects = [
		{
			name: 'SuperOne',
			type: 'Web',
			imageUrl_small: 'media/small_project/superOne.png',
			imageUrl: 'media/superOne.png',
			website: 'https://super.one/',
			filter: 'web'
		}, {
			name: 'LabourDiary',
			type: 'App',
			imageUrl_small: 'media/small_project/labourdiary.png',
			imageUrl: 'media/labourdiary.png',
			website: 'http://labourdiary.com/',
			filter: 'app'
		}, {
			name: 'Captira',
			type: 'Web',
			imageUrl_small: 'media/small_project/captira.png',
			imageUrl: 'media/captira.png',
			website: 'https://www.captira.com/',
			filter: 'web'
		}, {
			name: '24bets',
			type: 'Web',
			imageUrl_small: 'media/small_project/imgonline-com-ua-CompressToSize-eQypYgY3WHH4d.jpg',
			imageUrl: 'media/imgonline-com-ua-CompressToSize-eQypYgY3WHH4d.jpg',
			website: 'https://www.24bets.com/en/',
			filter: 'web'
		}, {
			name: 'APFusion',
			type: 'Desktop',
			imageUrl_small: 'media/small_project/APFusion.png',
			imageUrl: 'media/APFusion.png',
			website: 'https://apfusion.com/',
			filter: 'desktop'
		}, {
			name: 'Simmpli Chat',
			type: 'Web',
			imageUrl_small: 'media/small_project/simmpliChat.png',
			imageUrl: 'media/simmpliChat.png',
			website: 'https://www.simmpli.com/',
			filter: 'desktop'
		}, {
			name: 'BooChat',
			type: 'Web',
			imageUrl_small: 'media/small_project/boochat.png',
			imageUrl: 'media/boochat.png',
			website: 'https://boochat.boogle.com/',
			filter: 'app'
		}
	]

	function getAge(dateString) {
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}

	function dateDiff(startingDate, endingDate) {
		var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
		if (!endingDate) {
			endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
		}
		var endDate = new Date(endingDate);
		if (startDate > endDate) {
			var swap = startDate;
			startDate = endDate;
			endDate = swap;
		}
		var startYear = startDate.getFullYear();
		var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
		var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	  
		var yearDiff = endDate.getFullYear() - startYear;
		var monthDiff = endDate.getMonth() - startDate.getMonth();
		if (monthDiff < 0) {
			yearDiff--;
			monthDiff += 12;
		}
		var dayDiff = endDate.getDate() - startDate.getDate();
		if (dayDiff < 0) {
			if (monthDiff > 0) {
				monthDiff--;
			} else {
				yearDiff--;
				monthDiff = 11;
			}
			dayDiff += daysInMonth[startDate.getMonth()];
		}

		let newYear = '';
		if(yearDiff == 1) {
			newYear = yearDiff + ' Year ';
		} else if(yearDiff > 1) {
			newYear = yearDiff + ' Years ';
		}

		let month = '';
		if(monthDiff == 1) {
			month = monthDiff + ' Month'
		} else if(monthDiff > 1) {
			month = monthDiff + ' Months'
		}

		return newYear +''+ month;
	}
});