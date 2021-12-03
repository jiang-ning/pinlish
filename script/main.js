/**
 * Pinlish
 * The main script file to read user customized contents in the textarea box
 * @author Jiang Ning
 */
import {writer} from '/script/writer.js';
import {reader} from '/script/reader.js';
import cleaner from '/script/cleaner.js';

document.querySelector('#english').addEventListener('input', writer);
document.querySelector('#listen').addEventListener('click', reader);
document.querySelector('#close').addEventListener('click', cleaner);
