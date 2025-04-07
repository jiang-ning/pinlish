/**
 * Pinlish
 * Translate user input latin referring the dictionary, and show results in the translation text area
 * @author Jiang Ning
 */
import dict from './dict.js'
import resizer from './resizer.js'
// import tester from '/script/tester.js';

let trackList = []

const writer = function () {
  document.querySelector('#pinlish').value = 'Translating...'

  /**
   * get user input text contents and trim, convert to lowercase and split to array
   * use for the iterator
   */
  let txt = document.querySelector('#english').value.trim().toLowerCase()

  //pick all characters out except a-z and store independently
  let sign = txt.match(/[^a-z]/g)

  //the final print results by pinlish showing in the translation area
  let print = ''

  //the final read results by pinlish speaking for speaker icon, clean the history record first
  trackList = []

  // remove all the characters except a-z
  txt = txt.split(/[^a-z]/g)

  //split every single word from the full sentence in textarea
  txt.forEach((word, idx) => {
    /**
     * checking each single letter starting from the full word,
     * and decrease from the end till a last letter left only
     */
    for (let i = 0, n = word.length; i < n; n--) {
      let piece = word.slice(i, n)

      //letter pronounce found in it related array that the property name is the letter self
      if (dict[word[i]].includes(piece)) {
        print += piece
        trackList.push(piece)
        i = n
        n = word.length + 1
      }

      //pronounce not found in related array, use the first value as the default
      else if (piece.length == 1 && dict[word[i]]) {
        print += dict[word[i]][0]
        trackList.push(dict[word[i]][0])
        i = n
        n = word.length + 1
      }

      //letter not found and it is not belong to one property in the dictionary object
      // if(dict[word[i]] == undefined) {
      //     //is not either a-z letters, add pause
      //     print += ' ';
      // }
    }

    //if a sign exist relate a word, push it after a word
    if (sign && sign[idx]) {
      print += sign[idx]
    }
  }) // end foreach

  //show translate results
  document.querySelector('#pinlish').value = print

  //call resizer
  resizer()

  //test ONLY
  // tester();
}

export { writer, trackList }
