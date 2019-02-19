'use strict';

function DaysInMonth(month,leapYear){
  let answer='';
  switch(month){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    answer = `${month} has 31 days.`;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    answer = `${month} has 30 days.`;
    break;
  case 'February':
    if(leapYear===true){
      answer = `${month} has 29 days.`; 
    }
    else{
      answer = `${month} has 28 days.`;
    }
    break; 
  default:
    answer= 'Must provide a valid month.';
  }

  return answer;
}

console.log(DaysInMonth('july','False'));