'use strict';

/* App Module */

var app = angular.module('schedulerApp', [ ]);

app.controller('MainSchedulerCtrl', function($scope) {
	
	
  $scope.events = [
    { id:1, text:"English Class - Intermediate Level",
      start_date: new Date(2016, 1, 12),
      end_date: new Date(2016, 1, 16) },
    { id:2, text:"Italian Class - Advanced level",
      start_date: new Date(2016, 1, 22 ),
      end_date: new Date(2016, 1, 24 ) }
  ];
  
  


  //$scope.scheduler = { date : new Date(2016,2,1) };

});