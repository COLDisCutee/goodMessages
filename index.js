const url = new URL('https://api.qwer.pw/request/helpful_text');
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
  document.querySelector(".goodMessage").innerText = answer
   document.querySelector(".goodMessage").style.opacity = "100%"
   document.querySelector(".by").innerText = "- "+by+" -"
  
     document.querySelector(".by").style.opacity = "100%"
}
fetch(url)
  .then(response => response.json())
  .then(answerGet)
  .catch(error => console.error(error));