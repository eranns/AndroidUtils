const {remote} = require('electron');
const adb=remote.require('./sys/adb/adb');
var app=angular.module("mainApp").controller("homeController", function (deviceService, $scope) {
    $scope.devices =  deviceService.getAvilableDevices().then(function (result) {
        $scope.devices = result;
        $scope.$digest()
    }).catch(function(error){
        console.log(error);
    });

});



app.service('deviceService', function () {
    // console.log(await favourites.getDevices());

    this.getAvilableDevices = async function () {
        try{
            // console.log(await adb.getDevices());
            return await adb.getDevices();
        }
        catch (e) {
            console.log("getAvilableDevices error "+e)
        }

    }

    this.getProperties = async function(devices){
    return "";
    }

});

