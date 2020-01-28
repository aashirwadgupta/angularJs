'use strict';
eventsApp.controller('EventController',
	function ($scope) {
		$scope.snippet = '<span style="color:red">Hello Snippet</span>';
		$scope.boolValue = true;
		$scope.event = {
			name: 'Learning Angular 1',
			date: '01/06/2016',
			time: '10:30 am',
			location: {
				address:'Cognizant Technology Solutions, Manasa towers',
				city: 'Mangalore',
				state: 'Karnatka'
			},
			imageUrl: '../app/angularjs-logo.png',
			sessions: [
				{
					name: 'Angular js mock exams 1',
					taker: 'Aashirwad Gupta',
					duration: '2 hr',
					level: 'Beginner',
					abstract: 'In this exams developer will be assessed on basic knowledge of angular js',
					upVoteCount: 0
				},
				{
					name: 'Angular js mock exams 2',
					taker: 'Aashirwad Gupta',
					duration: '2 hr',
					level: 'Intermediate',
					abstract: 'In this exams developer will be assessed on Intermediate knowledge of angular js',
					upVoteCount: 1
				},
				{
					name: 'Angular js mock exams 3',
					taker: 'Aashirwad Gupta',
					duration: '2 hr',
					level: 'Proficient',
					abstract: 'In this exams developer will be assessed on proficiency of angular js',
					upVoteCount: 2
				},
				{
					name: 'Angular js mock exams 4',
					taker: 'Aashirwad Gupta',
					duration: '2 hr',
					level: 'Experienced',
					abstract: 'In this exams developer will be assessed on expertise knowledge of angular js',
					upVoteCount: 3
				}
			]
		}
		
		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};
		
		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};
	}
);