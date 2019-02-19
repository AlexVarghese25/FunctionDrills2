'use strict';

function decode(code){
  let words = code.split(' ');
  let answer ='';
  for(let i=0;i<words.length;i++){
    if(words[i][0]==='a'){
      answer += words[i][1];
    }
    else if(words[i][0]==='b'){
      answer += words[i][2];
    }
    else if(words[i][0]==='c'){
      answer += words[i][3];
    }
    else if(words[i][0]==='d'){
      answer += words[i][4];
    }
    else{
      answer += ' ';
    }
  }

  return answer;
}

console.log(decode('craft block argon meter bells brown croon droop'));

