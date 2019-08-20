// Define your global angular app var
var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider)  {
    // "use strict";
    $routeProvider
    // homepage
        .when('/', {
            templateUrl: "./home/home.html",
            controller : 'homeController as homeCtrl',
            css: 'home/home.css'
        })
        .when('/home', {
            templateUrl: 'home/home.html',
            controller : 'homeController as homeCtrl',
            css: 'home/home.css'
        })
        .when('/device', {
            templateUrl: './device/device.html',
            controller : 'deviceController as deviceCtrl',
            css: 'device/device.css',
        })
        .when('/apk', {
            templateUrl: 'apk/apk.html',
            controller : 'apkController as apkCtrl',
            css: 'apk/apk.css'
        })
        .when('/about', {
            templateUrl: 'about/about.html',
            controller : 'aboutController as abtCtrl',
            css: 'about/about.css'
        })
        .otherwise({ redirectTo: '/' });
});
