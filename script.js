const firstEmoji = document.querySelector('.first')
const secondEmoji = document.querySelector('.second')
const thirdEmoji = document.querySelector('.third');
const parentEmoji = document.querySelector('.emoji');
const emojiFirst = document.querySelector('.firstemoji')
const emojiSecond = document.querySelector('.secondEmoji')
const emojithird = document.querySelector('.thirdEmoji')
const feed = document.querySelector('#feed')
const quarry = document.querySelector('#quarry');
const button = document.querySelector('#button');
const textarea = document.querySelector('#textarea');
const container = document.querySelector('.container');
const main = document.querySelector('main');
console.log(firstEmoji.innerText);

function displayFeedBack(item) {
    feed.innerText = item.innerText;
    quarry.innerText = textarea.value;
    container.style.display = "none";
    main.style.display = "flex";

    setTimeout(()=>{
        textarea.value = "";
         firstEmoji.style.backgroundColor = ""
         emojiFirst.style.color= ""
         secondEmoji.style.backgroundColor = ""
         emojiSecond.style.color= ""
         thirdEmoji.style.backgroundColor = ""
         emojithird.style.color= ""
        container.style.display = "flex";
        main.style.display = "none";
    },4000)
}
firstEmoji.addEventListener('click',()=>{
    firstEmoji.style.backgroundColor="#8FBC8F";
    emojiFirst.style.color= "#fff"
    secondEmoji.style.backgroundColor = ""
    emojiSecond.style.color = ""
    thirdEmoji.style.backgroundColor = ""
    emojithird.style.color = ""
})
secondEmoji.addEventListener('click',()=>{
    secondEmoji.style.backgroundColor="#8FBC8F";
    emojiSecond.style.color= "#fff"
    firstEmoji.style.backgroundColor = ""
    emojiFirst.style.color = ""
    thirdEmoji.style.backgroundColor = ""
    emojithird.style.color = ""
})
thirdEmoji.addEventListener('click',()=>{
    thirdEmoji.style.backgroundColor="#8FBC8F";
    emojithird.style.color= "#fff"
    firstEmoji.style.backgroundColor = ""
    emojiFirst.style.color = ""
    secondEmoji.style.backgroundColor = ""
    emojiSecond.style.color = ""
})

button.addEventListener('click', ()=>{
    if(firstEmoji.style.backgroundColor === "rgb(143, 188, 143)"){
        displayFeedBack(firstEmoji)
    }
    else if(secondEmoji.style.backgroundColor === "rgb(143, 188, 143)"){
        displayFeedBack(secondEmoji)
    }
    else if(thirdEmoji.style.backgroundColor === "rgb(143, 188, 143)"){
        displayFeedBack(thirdEmoji)
    }
    
})

// parentEmoji.addEventListener('click',(e)=>{
//     e.target.backgroundColor = "red";
//     console.log(e.target.value);
    
    
    
//     if(e.target.innerText === "😒"){
//         firstEmoji.style.backgroundColor ="#8FBC8F"
//     }
//     else if(e.target.innerText === "😊"){
        
//     }
//     else if(e.target.innerText === "😉"){
        
//     }
    
// })
