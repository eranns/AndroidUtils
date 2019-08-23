# AndroidUtils

In macOS android device is not identified as mass storage and there's need to use MTP (Media Transfer Protocol) to communicate with the device which is not installed by default by apple unlike in Windows.
Android Transfer is a basic application by google but insufficent for more than basic use.
If you use usb debugging on the device you can also use communicate through adb client.

This project is electron app that shows android files and directories from a device connected to your computer using adb.

This project is based on  [adbkit(npm package) api](https://www.npmjs.com/package/adbkit/) 

some examples : 

Showing connected devices

![alt text](https://github.com/eranns/AndroidUtils/blob/master/app/img/home_example.png)

Showing files and folders

![alt text](https://github.com/eranns/AndroidUtils/blob/master/app/img/device_example.png)


