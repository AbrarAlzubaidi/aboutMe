# project name: about-me 

## process:

about guessing game for interacting with user by asq some question about page auther and give the user some hints.

**first step**, friendly welcoming to aske the user enter his/her name. if the user did not enter it re-ask hime again.then a confirm msg to confirm him about the question that he will ask it. if he press ok then move to question 1, else pop a alert msg to him said as you want ^^.

**second step**,start to ask the questions if he press ok as i said above.
if he answered the question correct, move to the additional question else pop an alert msg till him your answer is wrong.

**repeat** second step for each question (already there is a 9 questions).

**finally** after answering all the question. pop a alert msg tell him the number of questions is true. if he answered all question wrong. thank him for his try.  

**if the Q has additional Q or not:**


|question|has or not|
|--------|----------|
|1       | has      |
|2       | has      |
|3       | not      |
|4       | has      |
|5       | has      |



### questions:

1. Guess my gender i do not like shopping, nutella, cats, accessories is my gender male?

   - addQ:ok, can you guess what i like ^^ ?

2. Guess my fav color my fav color is a primary color is my color purple?

   - addQ:ok, can you guess what is my second fav color, HINT: i write it in the previous msg ^^ ?


3. Do i like night or morning i prefer quiet moments am i like night? 
4. My fav number if you draw it beside its reflection you will get s.th like a jar is it 2 ?

    - ok, now i have a number in my brain can you guess it.HINT: it is from 2 digits both summation is 5 ^^ ?


5.  Where am i from my country is small in Asia in the Middle East between Syria and Iraq is it Jordan ?

     - ok, by we take about countries, can you geuss what place i want to visit, it could be country or city or just a place ^^ ?



----------------------------------------------------



## inputs:
- q1,q2,...q9.
- username
- correctCounter
- number
- arrays:
    - like
    - color
    - places


---------------------------------------------



## outputs:
pop MSGs.
