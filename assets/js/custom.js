/*
* Author: Alex P
* URL: www.itsokayitsofficial.io
* Author: lastrose
* URL: https://jsfiddle.net/lastrose/vkMqR/

* Project Name: Assignment #8: Mah Bands!
* Version: all
* Date: 07.05.17
* URL: n/a
*/


var audio;
var playlist;
var tracks;
var current;

init();

function init(){
    current = 0;
    audio = $('audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .10;

    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });

    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len) {
            current = 0;
            link = playlist.find('a')[0];
        }
        else {
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });
}