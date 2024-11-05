// const btn = document.querySelector('.talk')
// const content = document.querySelector('.content')


// function speak(text){
//     const text_speak = new SpeechSynthesisUtterance(text);

//     text_speak.rate = 1;
//     text_speak.volume = 1;
//     text_speak.pitch = 1;

//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe(){
//     var day = new Date();
//     var hour = day.getHours();

//     if(hour>=0 && hour<12){
//         speak("Good Morning Boss...")
//     }

//     else if(hour>12 && hour<17){
//         speak("Good Afternoon Master...")
//     }

//     else{
//         speak("Good Evenining Sir...")
//     }

// }

// window.addEventListener('load', ()=>{
//     speak("Initializing Boost Pro..");
//     wishMe();
// });

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition =  new SpeechRecognition();

// recognition.onresult = (event)=>{
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());

// }

// btn.addEventListener('click', ()=>{
//     content.textContent = "Listening...."
//     recognition.start();
// })

// function takeCommand(message){
//     if(message.includes('hey') || message.includes('hello')){
//         speak("Hello Sir, How May I Help You?");
//     }
//     else if(message.includes("open google")){
//         window.open("https://google.com", "_blank");
//         speak("Opening Google...")
//     }
//     else if(message.includes("open youtube")){
//         window.open("https://youtube.com", "_blank");
//         speak("Opening Youtube...")
//     }
//     else if(message.includes("open facebook")){
//         window.open("https://facebook.com", "_blank");
//         speak("Opening Facebook...")
//     }

//     else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
//         window.open('https://www.google.com/search?q=${message.replace(" ", "+")}', "_blank");
//         const finalText = "This is what i found on internet regarding " + message;
// 	    speak(finalText);
  
//     }

//     else if(message.includes('wikipedia')) {
//         window.open('https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}', "_blank");
//         const finalText = "This is what i found on wikipedia regarding " + message;
//         speak(finalText);
//     }

//     else if(message.includes('time')) {
//         const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
//         const finalText = time;
//         speak(finalText);
//     }

//     else if(message.includes('date')) {
//         const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
//         const finalText = date;
//         speak(finalText);
//     }

//     else if(message.includes('calculator')) {
//         window.open('Calculator:///')
//         const finalText = "Opening Calculator";
//         speak(finalText);
//     }
//     else if(message.includes("OPEN PRODUCT ")){
//         window.open("", "_blank");
//         speak("Opening Product...")
//     }
//     else if(message.includes("open programs")){
//         window.open("", "_blank");
//         speak("Opening All the programs...")
//     }
//     else if(message.includes("open Blog")){
//         window.open("", "_blank");
//         speak("Opening the blog...")
//     }
//     else if(message.includes("open cardio")){
//         window.open("index.html", "_blank");
//         speak("Opening the cardio...")
//     }
//     else if(message.includes("how to do payment")){
//         // window.open("index.html", "_blank");
//         speak("just chose a plan and submit it, after that you can scan the Qr code and fill the form .and send it you get your answer. thank you if you have further query just ask ...")
//     }

//     else if(message.includes("Thanks for the information")){
//         // window.open("index.html", "_blank");
//         speak("My pleasure sir, its my duty...")
//     }
//     else if(message.includes("what is the name of this website")){
//         // window.open("index.html", "_blank");
//         speak("the page name is Boost pro")
//     }
//     else if(message.includes("what is the use of this website")){
//         // window.open("index.html", "_blank");
//         speak("this page is used to motivate people regarding their physical health and motivate's to stay fit and healthy ")
//     }
//     else {
//         // window.open(https://drive.google.com/file/d/15c2r6doaXNhJ2KwsmjPU5VGYAFm4lvkt/view?usp=sharing=${message.replace(" ", "+")}, "_blank");
//         const finalText = "I found some information for " + message + " on google";
//         speak(finalText);
//     }
// }
