/**
 * Pinlish
 * The speaker read translated text referring to the provided track list from the writer
 * @author Jiang Ning
 */

const synth = window.speechSynthesis

const pinlish = document.querySelector('#pinlish')
const listen = document.querySelector('#listen')

const reader = function () {
  if (listen.getAttribute('class') == 'active') {
    listen.setAttribute('class', '')
  } else {
    listen.setAttribute('class', 'active')
  }

  if (synth.speaking) {
    console.error('speechSynthesis.speaking')
    return
  }

  if (pinlish.value !== '') {
    synth.cancel()
    const utterThis = new SpeechSynthesisUtterance(pinlish.value)

    listen.setAttribute('class', 'active')

    utterThis.onend = function (event) {
      listen.setAttribute('class', '')
      console.log('SpeechSynthesisUtterance.onend')
    }

    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror')
    }

    utterThis.voice = synth.getVoices()[0]
    synth.speak(utterThis)
  }
}

export { reader }
