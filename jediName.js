'use strict';

function jediName(first, last){
  return last.substring(0,3)+first.substring(0,2);
}

console.log(jediName('Alex','Varghese'));
