var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        window.addEventListener("batterystatus", onBatteryStatus, false);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        document.addEventListener("deviceready", onDeviceReady, false);
            function onDeviceReady() {
                document.getElementById('devTag1').innerHTML = device.platform;
                document.getElementById('devTag2').innerHTML = device.model;
                document.getElementById('devTag3').innerHTML = device.version;
                document.getElementById('devTag4').innerHTML = device.manufacturer;
            }

        // Event Called
        console.log('Received Event: ' + id);
        
    }
};

function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    $('.battery-status').text("Battery Level: " + status.level + "% Plugged in: " + status.isPlugged);
}

