const url = new URL('https://api.qwer.pw/request/helpful_text');
let soundplayed = false
const params = new 
URLSearchParams({apikey: 'guest'});
let answer

url.search = params.toString();
function answerGet(data){
  let answer
  let by
  if (data[1].respond.includes('–')){
    answer = (data[1].respond).split("–")[0]
    by = (data[1].respond).split("–")[1]
  }else{
    answer = (data[1].respond).split("-")[0]
    by = (data[1].respond).split("-")[1]
  }
  if (soundplayed == false){
    let audio = new Audio('audio/Aakash Gandhi - One Step Closer (Romantic).mp3');
    audio.volume = 0.25;
audio.play();
    soundplayed = true;
  }
    document.querySelector(".goodMessage, .by").style.transition = "opacity 1s"
  document.querySelector(".goodMessage").innerText = answer
   document.querySelector(".goodMessage").style.opacity = "100%"
   document.querySelector(".by").innerText = "- "+by+" -"
  
     document.querySelector(".by").style.opacity = "100%"
}
function newMessage(){
 fetch(url)
  .then(response => response.json())
  .then(answerGet); 
}
document.querySelector(".startButton").addEventListener('click', newMessage)
