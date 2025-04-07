/**
 * Pinlish
 * Clean the contents in both text area
 * @author Jiang Ning
 */
const cleaner = function () {
  document.querySelector('textarea').value = ''
  document.querySelector('#pinlish').value = ''
  document.querySelectorAll('textarea')[0].style.height = ''
  document.querySelectorAll('textarea')[1].style.height = ''
  document.querySelector('#english').focus()
}

export default cleaner
