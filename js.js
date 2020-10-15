const words = ['САЛО','Je m appelle','salut']

 let word = words[ Math.floor(Math.random()*words.length )]

 let answerArray = [];
 for(let i = 0;i<word.length; i++){
    answerArray[i]='_';
 }

 var remainLetters = word.length

 while(remainLetters > 0){
    alert(answerArray.join(' '))
     remainLetters--;
     var guess = prompt('Ведите букву или слово целиком!');
     if(guess == ''){break;}
     else if (guess == word){
         remainLetters = 0;
         alert('Ура отгадали!');
         break;
     }
     else if(guess.length > 1){
         alert('Ввдите только правельные буквы!')
         break;
     }
     else{
         for(let j = 0; j<word.length; j++){
             if (word[j] == guess){
                 answerArray[j] = guess;
                 remainLetters--;

             }
         }
     }
 }

 document.getElementById('slovo').innerHTML = word;
