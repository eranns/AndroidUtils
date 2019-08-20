var Promise = require('bluebird')
var adb = require('adbkit')
var client = adb.createClient()

async function  getDevices(){
    var  devices= await client.listDevices();
    return getDevicesInfo(devices);
    // devices=client.listDevices();
}
async function getDevicesInfo(devices){
    devices_arr=[];
    console.log(devices);
    for (dev of devices) {
        var deviceprop=await client.getProperties(dev.id);
        var json_dev={
            "id": dev.id ,
            "vendor":deviceprop["ro.product.vendor.name"] ,
            "version":deviceprop["ro.build.ota.versionname"]
        };
        devices_arr.push(json_dev);
    }
    return devices_arr;
};
async function getProperties(deviceid){
    propertieslist=[]
    client.getProperties(deviceid,function(err,properties){
        propertieslist.push(properties.ro.product.vendor.name)
        propertieslist.push(properties.gsm.operator.alpha)
        propertieslist.push(ro.build.ota.versionname)
        return propertieslist
    }).catch(function(err){
        return err;
    })
}

async function getdirArray(deviceid,path){
    //start path is /storage/emulated/0

    client.readdir(deviceid, '/storage/emulated/0/')
        .then(function(files) {
            // Synchronous, so we don't have to care about returning at the
            // right time
            files.forEach(function (file) {
                if (file.isFile()) {
                    file.directory = false;
                    currentfiles.push(file);

                    // console.log('[%s] Found file "%s"', device.id, file.name)
                } else {
                    file.directory = true;
                    currentfiles.push(file);
                    // console.log(file);
                }
            })
        });
}
module.exports.getDevices = getDevices;
module.exports.getProPerties = getProperties;
module.exports.getDirArray = getdirArray;


