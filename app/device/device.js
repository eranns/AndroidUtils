const {remote} = require('electron');
const adb=remote.require('./sys/adb/adb');
var app=angular.module("mainApp").controller("deviceController", function (deviceService, $scope) {

    $scope.showdir=deviceService.getcurrentdir();
    $scope.changedir=function(dir){
        try{
            deviceService.setcurrentdir(dir);
            $scope.showdir=deviceService.getcurrentdir();
            $scope.$apply;
        }
        catch(e){
            alert(e);
        }

    }




});


