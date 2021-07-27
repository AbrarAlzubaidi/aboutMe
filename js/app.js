'use strict';

//variables declaration
let q1; // for gender msg
let q2; // for color msg
let q3; //for night or morning msg
let q4; //for my fav num msg
let q5; //for my country msg
let q6; //for geussing what i likes msg
let q7; //to guess my sec fav num msg
let q8; //to guess what is the num inside my brain
let q9; //to guess what is my fav places i want to visit
// arrays declaration and initialization
let like=['food','quiet places','blue','sleep']; //for geussing what i likes msg
let color=['blue','purple']; //to guess my sec fav num msg
let places=['singapore','malisia','japan','qatar','New Zealand','Rome','London','Morocco','Banff','Victoria Falls']; // to guess what is place i want to visit msg


let number=41; //to guess what is the num inside my brain
let correctCounter=0; // counter for correct answers


//make user enter the name
let username=prompt('Hello please can you enter your name ^^');

//while user did not enter the name re-ask again until enter it
while(!username)
{
  username=prompt('Please enter your name to welcoming you ^^');
}

//welcoming msg and ask him if he/she wants to play
let answer=confirm('Hello '+username+' Nice to meet you ^^ ,you will be asked 5 main queastions to guess who am i.4 questions have an additional question will appear if you answer the main question correctly. it is like a game ^^ \n please answer yes or no ^^');

//if the answer is true play the game
if (answer === true)
{
  // ---------------------------------------Q1+Q6
  q1=prompt('Q1: Guess my gender \n  i do not like shopping, nutella, cats, accessories \n is my gender male?');
  if(q1.toLowerCase() === 'yes' || q1.toLowerCase()=== 'y' )
  //console.log('unfortunately your answer is wrong :(');
  {
    alert('unfortunately your answer is wrong :(');

  }

  //if answer is true
  else
  {
    //console.log('your answer is correct  i am a female^^');
    alert('your answer is correct  i am a female^^');

    for(let i=0 ; i<8;i++)
    {
      q6=prompt('Addational Q: ok, can you guess what i like ^^ ?').toLocaleLowerCase();
      for(let j=0 ; j<like.length;j++)
      {
        if(like[j]===q6)
        {
          alert('yaaah i like food, quiet places, blue and sleep');
          correctCounter++;

        }

      }
      break;
    }

    correctCounter++;
  }
  // ---------------------------------------Q2+Q7
  q2=prompt('Q2: Guess my fav color \n  my fav color is a primary color \n is my color purple?');
  if(q2.toLowerCase() === 'yes' || q2.toLowerCase()=== 'y' )
  //console.log('unfortunately your answer is wrong :(');
  {
    alert('unfortunately your answer is wrong :(');

  }

  //if answer is true
  else
  { //console.log('your answer is correct my fav color is blue ^^');
    alert('your answer is correct my fav color is blue ^^');
    for(let i=0 ; i<8;i++)
    {
      q7=prompt('additional Q: ok, can you guess what is my second fav color, HINT: i write it in the previous msg ^^ ?').toLocaleLowerCase();
      for(let j=0 ; j<color.length;j++)
      {
        if(color[j]===q7)
        {
          alert('yaaah i like blue and purple');
          correctCounter++;

        }
      }
      break;
    }
    correctCounter++;
  }
  // ---------------------------------------Q3+Q8
  q3=prompt('Q3: Do i like night or morning \n i prefer quiet moments   \n am i like night?');
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

  }
  // ---------------------------------------Q4
  q4=prompt('Q4: My fav number \n  if you draw it beside its reflection you will get s.th like a jar  \n is it 2 ?');
  if(q4.toLowerCase() === 'yes' || q4.toLowerCase()=== 'y' )
  {
    //console.log('unfortunately your answer is wrong :(');
    alert('unfortunately your answer is wrong :(');

  }

  //if answer is true
  else
  { //console.log('your answer is correct my fav number is 5 ^^');
    alert('your answer is correct my fav number is 5 ^^');
    for(let i=0 ; i<8;i++)
    {
      q8=prompt('additional Q: ok, now i have a number in my brain can you guess it.HINT: it is from 2 digits both summation is 5 ^^ ?');
      if(parseInt(q8)>number)
      {
        alert('it is too high, try again ^^');
      }
      else if(parseInt(q8)<number)
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
    correctCounter++;
  }
  // ---------------------------------------Q5+Q9
  q5=prompt('Q5: Where am i from \n  my country is small in Asia in the Middle East between Syria and Iraq  \n is it Jordan ?');
  if(q5.toLowerCase() === 'yes' || q5.toLowerCase()=== 'y' )

  //console.log('your answer is correct i live in Jordan ^^');
  {
    alert('your answer is correct i live in Jordan ^^');
    for(let i=0 ; i<8;i++)
    {
      q9=prompt('additional Q: ok, by we take about countries, can you geuss what place i want to visit, it could be country or city or just a place ^^ ?');
      for(let j=0;j<places.length;j++)
        if(q9 === places[j])
        {
          alert('singapore, malisia, japan, qatar, New Zealand, Rome, London, Morocco, Banff and Victoria Falls');
          correctCounter++;

        }
      break;

    }
    correctCounter++;
  }
  // if answer is wrong
  else
  {
  //console.log('unfortunately your answer is wrong :(');
    alert('unfortunately your answer is wrong :(');

  }
  if(correctCounter !==0)
    alert('Awsome '+username+' , you answered '+ correctCounter+' question true from 9: 5 main questions and 4 additional question , Thank you ^^');
  else
    alert('unfortunatelyf '+username+' , you did not answer anything correctly from 9 questions, Thank you for your try ^^');
}

// if user dont want to play
else
{
  alert('Ok as you want '+username+' ^^ nice to meet you');
}

