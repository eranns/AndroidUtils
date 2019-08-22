const {remote} = require('electron');
const adb=remote.require('./sys/adb/adb');
var app=angular.module("mainApp").controller("homeController", function (deviceService, $scope) {
    //
    $scope.devices="";

    $scope.devices =  deviceService.getAvilableDevices().then(function (result) {
        $scope.devices = result;
        $scope.$digest();
        deviceService.initdir();
    }).catch(function(error){
        console.log(error);
    });

    $scope.isAvailable=function(){
        return deviceService.isConnected();
    }

    $scope.deviceClick=function(event){
        deviceService.setcurrentDevice(event.target.id);
    }


});

app.service('deviceService', function () {
    var currentdevice= "";
    var numberOfDevices=0;
    var currentdir='/storage/emulated/0/';
    var dirarray="";

    this.getAvilableDevices = async function () {
        try{
            // console.log(await adb.getDevices());
            var result = await adb.getDevices();
            numberOfDevices=result.length;
            currentdevice=result[0];
            return result;
        }
        catch (e) {
            console.log("getAvilableDevices error "+e)
        }

    };
    this.getcurrentDevice = function (){
        return currentdevice;
    };

    this.setcurrentDevice = function(device){
        currentdevice=device;
    };
    this.isConnected=function(){
        return numberOfDevices >0;
    }
    this.getcurrentdir = function (){
        return currentdir;
    };

    this.initdir= async function(){
        currentdir=await adb.getDirArray(currentdevice.id,currentdir);
        k=5;

    };
    this.getdirarray=function(){
        return dirarray;
    }
    this.setdirarray=function(dir){
        try{

            dirarray=dir;
        }
        catch{
            throw new Error("dir was not found");
        }
    }

    this.setcurrentdir = function(dir){
        try{
            var currentdir=adb.getDirArray(currentdevice.id,dir);
            setdirarray(currentdir);

        }
        catch{
            throw new Error("dir was not found");
        }

    };



});

