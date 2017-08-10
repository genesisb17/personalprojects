/**
 * UI router etc
 */

import { loginController } from './js/controllers/logincontroller.js';

const app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
	//home states and nested views

	.state('home',{
		url: '/home',
		templateUrl:'partials/home.html'
	})
	.state('login',{
		url: '/login',
		templateUrl:'partials/login.html',
		controller: loginController
	})

	;



});