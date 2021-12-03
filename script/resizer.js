/**
 * Pinlish
 * Resize the textarea container with specified specs
 * @author Jiang Ning
 */

 const resizer = function() {
    
    const english = document.querySelector('#english');
    const pinlish = document.querySelector('#pinlish');
    const textarea = document.querySelectorAll('textarea');

    english.style.fontSize = pinlish.style.fontSize = '';
    textarea[0].style.height = textarea[1].style.height = '';

    if(english.scrollHeight > 280) {
        english.style.fontSize = pinlish.style.fontSize = 18;
    }

    if(english.scrollHeight > pinlish.scrollHeight) {
        textarea[0].style.height = textarea[1].style.height = english.scrollHeight;
    } else {
        textarea[0].style.height = textarea[1].style.height = pinlish.scrollHeight;
    }
    
 }

export default resizer;
