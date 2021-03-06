 // Empty constructor
 function DigitalAccessPlugin() {}
  
 // The function that passes work along to native shells
 // Message is a string, duration may be 'long' or 'short'

 
 
 DigitalAccessPlugin.prototype.scan = function(successCallback, errorCallback, badgeCode, isUsingFakeDevice) {
   cordova.exec(successCallback, errorCallback, 'DigitalAccessPlugin', 'scan', [badgeCode, isUsingFakeDevice]);
 }
 
 DigitalAccessPlugin.prototype.send = function(successCallback, errorCallback, isComing) {
   cordova.exec(successCallback, errorCallback, 'DigitalAccessPlugin', 'send', [isComing]);
 }
 
 DigitalAccessPlugin.prototype.stop = function(successCallback, errorCallback) {
   cordova.exec(successCallback, errorCallback, 'DigitalAccessPlugin', 'stop', null);
 }
 
 
 DigitalAccessPlugin.prototype.init = function(successCallback, errorCallback, timeoutScan, dbDistance, building, badgeCode) {
  cordova.exec(successCallback, errorCallback, 'DigitalAccessPlugin', 'init', [timeoutScan, dbDistance, building, badgeCode ]);    
 }

 DigitalAccessPlugin.prototype.checkBluetooth = function(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'DigitalAccessPlugin', 'checkBluetooth',[]);
}
 
 // Installation constructor that binds DigitalAccessPlugin to window
 DigitalAccessPlugin.install = function() {
   if (!window.plugins) {
     window.plugins = {};
   }
   window.plugins.digitalAccessPlugin = new DigitalAccessPlugin();
   return window.plugins.digitalAccessPlugin;
 };
 cordova.addConstructor(DigitalAccessPlugin.install);