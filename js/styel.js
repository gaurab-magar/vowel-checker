let inputValue = document.querySelector('#inputText');
let btn = document.querySelector('.btn');
let clear = document.getElementById('clear')
let result = document.querySelector('#Result');
btn.addEventListener("click", function(){
    let text = inputValue.value;
    let vowelCount = 0;
    text = text.toLowerCase();
        for(var i = 0; i < text.length; i++){
            var char = text.charAt(i);
            if(isVowel(char)){
                vowelCount++;
            }
        }
        result.textContent = `RESULT : ${vowelCount}`
    }
)
clear.addEventListener('click',function(){
    result.textContent=`RESULT : ${0}`;
    inputValue.value = ''
})

function isVowel(char){
    let vowels = ['a','e','i','o','u'];
    return vowels.includes(char);
}