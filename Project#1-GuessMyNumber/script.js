'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct Number"
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;



document.querySelector(".check").addEventListener('click',function(){
  const guess = Number( document.querySelector('.guess').value);
  console.log(guess);

  //When the is no input
  if (!guess){
    document.querySelector('.message').textContent = '❌ No number'

  //When the player wins
  }else if (guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Number'

    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';

    if (score > highscore){
      highscore=score;
      document.querySelector('.highscore').textContent=highscore;
    }

  //When the guess is not correct
  }else if(guess!==secretNumber){
    if(score>1){ 
      if(guess<secretNumber){
        document.querySelector('.message').textContent = '🔽 Too low'
      }else if(guess>secretNumber){
        document.querySelector('.message').textContent = '🔼 Too high'
      }
      score--;
      document.querySelector('.score').textContent = score;}
  
      //When score reaches 0
      else {
        document.querySelector('.message').textContent = '😢 You lost'
        document.querySelector('.score').textContent = 0;
        score= 0;
      }}

  });

document.querySelector(".again").addEventListener('click',function(){
  score=20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.number').textContent="?";
  document.querySelector('.message').textContent = 'Start guessing ...'
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.guess').value='';

});