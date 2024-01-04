let str = "";
let res = document.querySelector('#result');
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{  //e is event target is log what kind of element it is like button or h1 or textarea
        if(e.target.innerHTML=='='){
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML=='AC'){
            document.querySelector('input').value =" ";
        }
        else{
        console.log(e.target); //e is event target is log what kind of element it is like button or h1 or textarea
        str+=e.target.innerHTML;
        document.querySelector('input').value=str;
        }   
    })
 })
// let play = document.querySelector('#play');
// play.addEventListener('click',()=>{
//     let text = res.value; //result input value is saved as text

//   // Create a new SpeechSynthesisUtterance object
//   let utterance = new SpeechSynthesisUtterance();

//   // Set the text and voice of the utterance
//   utterance.text = text;
//   utterance.voice = window.speechSynthesis.getVoices()[0];

//   // Speak the utterance
//   window.speechSynthesis.speak(utterance);
// })

