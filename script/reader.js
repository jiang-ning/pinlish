/**
 * Pinlish
 * The speaker read translated text referring to the provided track list from the writer
 * @author Jiang Ning
 */
import {trackList} from './writer.js';

let trackIndex = 1;
const audio = new Audio();
const listen = document.querySelector('#listen');

audio.addEventListener('ended', () => {
    if(trackIndex < trackList.length) {
        play(trackList[trackIndex++]);
    } else {
        listen.setAttribute('class', '');
        // document.querySelector('img').setAttribute('class', ''); // rolling logo
        trackIndex = 1;
    }
});

const play = function(pronounce) {
    audio.src = '/pinlish/vocal/' + pronounce + '.mp3';
    audio.play();
}

const reader = function() {
    if(listen.getAttribute('class') == 'active') {
        listen.setAttribute('class', '');
        audio.pause();
        trackIndex = 1;
        // document.querySelector('img').setAttribute('class', ''); // rolling logo
    } else {
        if(trackList && trackList.length > 0) {
            // document.querySelector('img').setAttribute('class', 'active'); // rolling logo
            listen.setAttribute('class', 'active');
            play(trackList[0]);
        } else {
            // console.log('no track');
        }
    }
    
}

export {reader};
