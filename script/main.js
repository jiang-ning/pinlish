/**
 * Pinlish
 * The main script file to read user customized contents in the textarea box
 * @author Jiang Ning
 */
import {writer} from './writer.js';
import {reader} from './reader.js';
import cleaner from './cleaner.js';

document.querySelector('#english').addEventListener('input', writer);
document.querySelector('#listen').addEventListener('click', reader);
document.querySelector('#close').addEventListener('click', cleaner);
