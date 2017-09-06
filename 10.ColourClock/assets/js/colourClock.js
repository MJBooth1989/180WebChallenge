$(document).ready (function(){
    
function time(){
    var now = new Date();
    var hour = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();
    var colour = timeColour(hour, mins, secs);
    
   
    hour = formatTime(hour);
    mins = formatTime(mins);
    secs = formatTime(secs);
    
    $('#current_hour').text(hour);
    $('#current_minute').text(mins);
    $('#current_second').text(secs);
    $('body').css('background-color', '#' + colour);
    $('#current_colour').text(colour);
    
    t=setTimeout(function(){time()}, 500);
}

function formatTime(i){
    if(i < 10){
        i = '0' + i;
    }
    return i; 
}
function formatColour(i){
    if(i.length < 2){
        i = '0' + i;
    }
    return i;
}
function timeColour(hour, mins, secs){
    red= Math.round(255 * (hour/23)).toString(16);
    green= Math.round(255 * (mins/59)).toString(16);
    blue= Math.round(255 * (secs/59)).toString(16);
    
    red= formatColour(red);
    green = formatColour(green);
    blue = formatColour(blue);
    
    return (red + green + blue).toUpperCase();
}
    time();
});