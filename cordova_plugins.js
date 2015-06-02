cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.vibration/www/vibration.js",
        "id": "org.apache.cordova.core.vibration.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/com.rjfun.cordova.plugin.lowlatencyaudio/www/LowLatencyAudio.js",
        "id": "com.rjfun.cordova.plugin.lowlatencyaudio.LowLatencyAudio",
        "clobbers": [
            "window.plugins.LowLatencyAudio"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.core.vibration": "0.3.0",
    "com.rjfun.cordova.plugin.lowlatencyaudio": "1.0",
    "org.apache.cordova.dialogs": "0.2.6"
}
// BOTTOM OF METADATA
});