'use strict';

//variables declaration
let q1;
let q2;
let q3;
let q4;
let q5;
let correctCounter=0;
let wrongCounter=0;
//make user enter the name
let username=prompt('Hello please can you enter your name ^^');

//while user did not enter the name re-ask again until enter it
while(!username)
{
  username=prompt('Please enter your name to welcoming you ^^');
}

//welcoming msg and ask him if he/she wants to play
let answer=confirm('Hello '+username+' Nice to meet you ^^ ,you will be asked 5 queastions to guess who am i. it is like a game ^^ \n please answer yes or no ^^');

//if the answer is true play the game
if (answer === true)
{
  // ---------------------------------------Q1
  q1=prompt('Guess my gender \n  i do not like shopping, nutella, cats, accessories \n is my gender male?');
  if(q1.toLowerCase() === 'yes' || q1.toLowerCase()=== 'y' )
  //console.log('unfortunately your answer is wrong :(');
  {
    alert('unfortunately your answer is wrong :(');
    wrongCounter++;
  }

  //if answer is true
  else
  {
    //console.log('your answer is correct  i am a female^^');
    alert('your answer is correct  i am a female^^');
    correctCounter++;
  }
  // ---------------------------------------Q2
  q2=prompt('Guess my fav color \n  my fav color is a primary color \n is my color purple?');
  if(q2.toLowerCase() === 'yes' || q2.toLowerCase()=== 'y' )
  //console.log('unfortunately your answer is wrong :(');
  {
    alert('unfortunately your answer is wrong :(');
    wrongCounter++;
  }

  //if answer is true
  else
  { //console.log('your answer is correct my fav color is blue ^^');
    alert('your answer is correct my fav color is blue ^^');
    correctCounter++;
  }
  // ---------------------------------------Q3
  q3=prompt('Do i like night or morning \n i prefer quiet moments   \n am i like night?');
  if(q3.toLowerCase() === 'yes' || q3.toLowerCase()=== 'y' )
  //console.log('your answer is correct i prefer night more than morning ^^');
  {
    alert('your answer is correct i prefer night more than morning ^^');
    correctCounter++;
  } 

  // if answer is wrong
  else
  {
    //console.log('unfortunately your answer is wrong :(');
    alert('unfortunately your answer is wrong :(');
    wrongCounter++;
  }
  // ---------------------------------------Q4
  q4=prompt('My fav number \n  if you draw it beside its reflection you will get s.th like a jar  \n is it 2 ?');
  if(q4.toLowerCase() === 'yes' || q4.toLowerCase()=== 'y' )
  {
    //console.log('unfortunately your answer is wrong :(');
    alert('unfortunately your answer is wrong :(');
    wrongCounter++;
  }

  //if answer is true
  else
  { //console.log('your answer is correct my fav number is 5 ^^');
    alert('your answer is correct my fav number is 5 ^^');
    correctCounter++;
  }
  // ---------------------------------------Q5
  q5=prompt('Where am i from \n  my country is small in Asia in the Middle East between Syria and Iraq  \n is it Jordan ?');
  if(q5.toLowerCase() === 'yes' || q5.toLowerCase()=== 'y' )

  //console.log('your answer is correct i live in Jordan ^^');
  {
    alert('your answer is correct i live in Jordan ^^');
    correctCounter++;
  }
  // if answer is wrong
  else
  {
  //console.log('unfortunately your answer is wrong :(');
    alert('unfortunately your answer is wrong :(');
    wrongCounter++;
  }
  alert('Thank you '+username+' , you answered '+ correctCounter+' question true');

}

// if user dont want to play
else
{
  alert('Ok as you want '+username+' ^^ nice to meet you');
}

