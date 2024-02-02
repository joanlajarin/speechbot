
let text = "QUIERO MEDIO POLLO NO ME PONGAS UN POLLO ENTERO ESPAVILADO. ESTE POLLO ESTA SABROSO"
let language = "en-US"
let voice = "Albert"
let speed = "0.5"
const synth = window.speechSynthesis;
let voices

const btnTxtToSpeech = document.querySelector(".btn-text-to-speech")
btnTxtToSpeech.addEventListener("click",textToSpeech)

function captureData(){
    const textToSpeech = document.querySelector(".text-area")
    console.log("A " + textToSpeech.value)

    text = textToSpeech.value
}
function textToSpeech() {
    captureData()
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed
    speechSynthesis.speak(utterance);
}
synth.addEventListener("voiceschanged", populateVoiceList)

function populateVoiceList() {
    voices = synth.getVoices()
    console.log(voices)
    if(voices.length > 0) {
        console.log("array con datos")
        let lang
        let name
        for(let i= 0; i < voices.length;i++) {

            if(lang != voices[i].lang) {
                lang = voices[i].lang
                fillLanguageSettings(lang, i)
            }
            name = voices[i].name
            fillVoiceSettings(name, i)
        }
    } else {
        console.log("array vacia")
    }
}  

const listLanguage = document.getElementById("select-language")
const listVoice = document.getElementById("select-voice")

function fillLanguageSettings(language, ind) {
    listLanguage.innerHTML += `<option value="value-language-` + ind + `">` + language +`</option>`
}
function fillVoiceSettings(voice, ind) {
    listVoice.innerHTML += `<option value="value-voice-` + ind + `">` + voice +`</option>`
}

const btnsSpeed05x = document.getElementById("btn-speed-05x")
const btnsSpeed075x = document.getElementById("btn-speed-075x")
const btnsSpeed1x = document.getElementById("btn-speed-1x")
const btnsSpeed15x = document.getElementById("btn-speed-15x")

btnsSpeed05x.addEventListener("click", (e) => changeSpeed(e))
btnsSpeed075x.addEventListener("click", (e) => changeSpeed(e))
btnsSpeed1x.addEventListener("click", (e) => changeSpeed(e))
btnsSpeed15x.addEventListener("click", (e) => changeSpeed(e))

function changeSpeed(e) {
    speed = e.currentTarget.getAttribute("value")
}
