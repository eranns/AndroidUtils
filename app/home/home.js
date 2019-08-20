const {remote} = require('electron');
const adb=remote.require('./sys/adb/adb');
var app=angular.module("mainApp").controller("homeController", function (deviceService, $scope) {
    //
    $scope.devices="";

    $scope.devices =  deviceService.getAvilableDevices().then(function (result) {
        $scope.devices = result;
        $scope.$digest()
    }).catch(function(error){
        console.log(error);
    });

    $scope.isAvailable=function(){
        return deviceService.isConnected();
    }

    $scope.deviceClick=function(event){
        console.log(event)
        deviceService.setcurrentDevice(event.target.id);

        console.log(deviceService.getcurrentDevice())
    }


});





app.service('deviceService', function () {
    var currentdevice= "";
    var numberOfDevices=0;
    // console.log(await favourites.getDevices());

    this.getAvilableDevices = async function () {
        try{
            // console.log(await adb.getDevices());
            var result = await adb.getDevices();
            numberOfDevices=result.length;
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

    this.getProperties = async function(devices){
    return "";
    }

});

