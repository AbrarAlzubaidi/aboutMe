'use strict';

// arrays declaration and initialization

// variables declaration and initialization
let number=41; //to guess what is the num inside my brain
let correctCounter=0; // counter for correct answers

let username=prompt('Hello please can you enter your name ^^');
//make user enter the name
checkUsername();

//-----------------------FUNCTIONS------------------

// to check user name
function checkUsername() {


  //while user did not enter the name re-ask again until enter it
  while(!username)
  {
    username=prompt('Please enter your name to welcoming you ^^');
    console.log(username);

  }
  //welcoming msg and ask him if he/she wants to play
  let answer=confirm('Hello '+username+' Nice to meet you ^^ ,you will be asked 7 queastions to guess who am i. it is like a game ^^ \n please answer yes or no except q6,q7 ^^');
  checkAnswer(answer);
}


// to check user answer
function checkAnswer(ANSWER){
  console.log(ANSWER);

  if (ANSWER === true)
  {
    let q1 =prompt('Q1: Guess my gender \n  i do not like shopping, nutella, cats, accessories \n is my gender male?').toLowerCase();// for gender msg
    genderGuessing(q1);

    let q2=prompt('Q2: Guess my fav color \n  my fav color is a primary color \n is my color purple?').toLowerCase();// for color msg
    colorGuesiing(q2);

    let q3=prompt('Q3: Do i like night or morning \n i prefer quiet moments   \n am i like night?').toLowerCase();//for night or morning msg
    favTimeGuessing(q3);

    let q4=prompt('Q4: My fav number \n  if you draw it beside its reflection you will get s.th like a jar  \n is it 2 ?').toLowerCase();//for my fav num msg
    favNumberGuessing(q4);

    let q5=prompt('Q5: Where am i from \n  my country is small in Asia in the Middle East between Syria and Iraq  \n is it Jordan ?').toLowerCase();//for my country msg
    fromGuessing(q5);


    likeGuessing();

    numberGuessing();

    resultMsg(correctCounter);

  }
  else
  {
    alert('Ok as you want '+username+' ^^ nice to meet you');
  }
}


//-----------------------------------------------------------------
function genderGuessing(Q1){
  console.log(Q1);
  if(Q1 === 'yes' || Q1 === 'y' )
  //console.log('unfortunately your answer is wrong :(');
  {
    alert('unfortunately your answer is wrong :(');

  }

  //if answer is true
  else
  {
    //console.log('your answer is correct  i am a female^^');
    alert('your answer is correct  i am a female^^');
    correctCounter++;
  }
}


// -----------------------------------------------------------------
function likeGuessing()
{
  let like=['food','quiet places','blue','sleep']; //for geussing what i likes msg
  for( let i=0; i<4;i++)
  {
    let q6=prompt('Q6: ok, can you guess what i like ^^ ?').toLowerCase();
    console.log(like.length);

    if(like.includes(q6))
    {
      alert('that\'s correct');
      correctCounter++; break;

    }
    else{
      alert('naah, try again ^^');
    }
  }

}

//--------------------------------------------
function colorGuesiing(Q2)
{
  if(Q2 === 'yes' || Q2 === 'y' )

  //console.log('unfortunately your answer is wrong :(');
  {
    alert('unfortunately your answer is wrong :(');
    console.log(Q2);

  }

  //if answer is true
  else
  { //console.log('your answer is correct my fav color is blue ^^');
    alert('your answer is correct my fav color is blue ^^');
    correctCounter++;
  }
}

//-------------------------------------------------------------------
function favTimeGuessing(Q3){
  if(Q3 === 'yes' || Q3 === 'y' )
  //console.log('your answer is correct i prefer night more than morning ^^');
  {
    alert('your answer is correct i prefer night more than morning ^^');
    console.log(Q3);

    correctCounter++;
  }

  // if answer is wrong
  else
  {
    //console.log('unfortunately your answer is wrong :(');
    alert('unfortunately your answer is wrong :(');

  }
}

//-------------------------------------------------
function favNumberGuessing(Q4){
  console.log(Q4);

  if(Q4 === 'yes' || Q4 === 'y' )
  {
    //console.log('unfortunately your answer is wrong :(');
    alert('unfortunately your answer is wrong :(');

  }

  //if answer is true
  else
  { //console.log('your answer is correct my fav number is 5 ^^');
    alert('your answer is correct my fav number is 5 ^^');
    correctCounter++;
  }
}
//----------------------------------------------
function numberGuessing (){

  for(let i=0 ; i<6;i++)
  {
    let Q7=prompt('Q7: ok, now i have a number in my brain can you guess it.HINT: it is from 2 digits both summation is 5 ^^ ?');//to guess what is the num inside my brain

    console.log(parseInt(Q7));

    if(Q7>number)
    {
      alert('it is too high, try again ^^');
    }
    else if(Q7<number)
    {
      alert('it is too low,try again ^^');
    }
    else
    {
      alert('it is correct the number is 41, awsome ^^');
      correctCounter++;
      break;
    }
  }
}
//------------------------------------------------

function fromGuessing(Q5){
  console.log(Q5);

  if(Q5 === 'yes' || Q5 === 'y' )

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

  }
}

//---------------------------------------------------
function resultMsg(counter){
  if(counter !==0)
    alert('Awsome '+username+' , you answered '+ counter+' question true from 7, Thank you ^^');
  else
    alert('unfortunatelyf '+username+' , you did not answer anything correctly from 7 questions, Thank you for your try ^^');
}
