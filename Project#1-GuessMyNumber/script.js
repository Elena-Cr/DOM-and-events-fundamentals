'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct Number"
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

document.querySelector('.number').textContent=secretNumber;

document.querySelector(".check").addEventListener('click',function(){
  const guess = Number( document.querySelector('.guess').value);
  console.log(guess);

  //When the is no input
  if (!guess){
    document.querySelector('.message').textContent = '❌ No number'

  //When the player wins
  }else if (guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number'

    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';

  //When the guess is lower
  }else if(guess< secretNumber){
    if(score>1){ 
    document.querySelector('.message').textContent = '🔽 Too low'
    score--;
    document.querySelector('.score').textContent = score;}

    //When score reaches 0
    else {
      document.querySelector('.message').textContent = '😢 You lost'
      document.querySelector('.score').textContent = 0;
      score= 0;
    }

    //When guess is higher
  }else if (guess > secretNumber){
    if(score>1){ 
    document.querySelector('.message').textContent = '🔼 Too high'
    score--;
    document.querySelector('.score').textContent = score;

    //When score reaches 0
    }else {
      document.querySelector('.message').textContent = '😢 You lost'
      document.querySelector('.score').textContent = 0;
      score = 0;
    }
  }
});