var app=angular.module("mainApp").controller("deviceController", function (deviceService, $scope) {

    $scope.showdir=deviceService.getcurrentdir();
    addattributes();

    console.log($scope.showdir);
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



    function addattributes(){
        $scope.showdir.forEach(function (file) {
            if (file.isFile()) {
                file.directory = false;
            } else {
                file.directory = true;
            }
    })};




});


