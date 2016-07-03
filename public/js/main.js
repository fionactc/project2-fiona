$(document).ready(function() {
    console.log('main.js loaded');

    /**
     *  Socket.io
     */
    var socket = io();
    socket.on('connect', function() {
        console.log('Connected');
    });
    socket.on('app:welcome', function(msg){
        console.log(msg);
    });
});