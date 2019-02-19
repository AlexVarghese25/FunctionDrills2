'use strict';
/*
Rock =1
Paper =2
Scisscors =3
*/
function RockPaperScissors(num){
  if(num!==1 && num!==2 && num!==3){
    return 'Please input 1, 2 or 3';
  }

  let comp = Math.floor(Math.random()*3)+1;

  if(num-1===comp || num+2===comp){
    return 'You won!';
  }
  else if(num===comp){
    return 'Tie!';
  }
  else{
    return 'Computer won!';
  }
}

console.log(RockPaperScissors(1));