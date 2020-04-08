

//constructor
class Category {
    constructor(word, image, decleration,audio){
      this.word = word;
      this.image = image; 
      this.decleration = decleration;
      this.audio = audio;
    }
  
   }
  //instances
  category1= new Category("lion","../Module-2_Assessment/assets/images/lion.jpeg","Youre Right! This is a LION!","../Module-2_Assessment/assets/Sounds/lion.wav");
  category2= new Category("wolf","../Module-2_Assessment/assets/images/wolf.jpeg","Youre Right! This is a WOLF!","../Module-2_Assessment/assets/Sounds/wolf.mp3");
  category3= new Category("dog","../Module-2_Assessment/assets/images/dog.jpeg","Youre Right! This is a DOG!","../Module-2_Assessment/assets/Sounds/dog.wav");
  category4= new Category("frog","../Module-2_Assessment/assets/images/frog.jpeg","Youre Right! This is a FROG!","../Module-2_Assessment/assets/Sounds/frog.mp3");
  category5= new Category("cow","../Module-2_Assessment/assets/images/cow.jpg","Youre Right! This is a COW!","../Module-2_Assessment/assets/Sounds/cow.wav");
  category6= new Category("horse","../Module-2_Assessment/assets/images/horse.jpg","Youre Right! This is a HORSE!","../Module-2_Assessment/assets/Sounds/horse.wav");
  category7= new Category("elephant","../Module-2_Assessment/assets/images/elephant.jpeg","Youre Right! This is an ELEPHANT!","../Module-2_Assessment/assets/Sounds/elephant.wav");
  category8= new Category("turkey","../Module-2_Assessment/assets/images/turkey.jpeg","Youre Right! This is a TURKEY!","../Module-2_Assessment/assets/Sounds/turkey.mp3");
  category9= new Category("snake","../Module-2_Assessment/assets/images/snake.jpeg","Youre Right! This is a SNAKE!","../Module-2_Assessment/assets/Sounds/snake.mp3");
  category10= new Category("cat","../Module-2_Assessment/assets/images/cat.jpeg","Youre Right! This is a CAT!","../Module-2_Assessment/assets/Sounds/cat.wav");
  category11= new Category("sheep","../Module-2_Assessment/assets/images/sheep.jpeg","Youre Right! This is a SHEEP!","../Module-2_Assessment/assets/Sounds/sheep.wav");
  
  //array from instances
  myCategories = [category1, category2, category3, category4, category5, category6, category7, category8, category9, category10, category11];
  //Selectors
  var Unknown = document.querySelector('#Unknown');
  var Wins = document.querySelector('#Wins');
  var Losses = document.querySelector('#Losses');
  var Letters = document.querySelector('#Letters')
  var counter = document.querySelector('#counter')
  var holder = document.querySelector ('#paste')
  var display = document.querySelector ('#display')
  var audio = document.querySelector ('#audio')
  //select random word and build array
  var randomCategory;
  var Split;
  var Check;
  var Try;
  var set1;
  var Tries;
  var key = Event.key;
  
  var declare  = function(Category){
      holder.innerHTML = Category.decleration;
      display.src= Category.image; 
      audio.src = Category.audio;
     }
    
  
  var start = function () {
  randomCategory = myCategories[Math.floor(Math.random()*myCategories.length)];
  console.log(randomCategory)
  Split = randomCategory.word.split("");
  Check = [];
  Answer = [];
  for (var j = 0; j < Split.length; j++) {
      Answer[j] = "_";
      }
  Try = 10;
  counter.innerHTML = Try;
  Unknown.innerHTML = Answer;
  Letters.innerHTML = "";
  holder.innerHTML = 'What am I ?';
  display.src = '../Module-2_Assessment/assets/images/placeholder.png';
  }
  
  start();
  
  
  
  
  
  
  
  
  var input = function () {
  key = event.key;
  //matching letters to chosen 
  for(var j=0; j<Split.length; j++) {
      //if key is in an index of split
          if (key === Split[j]) {
      //Assign the key in correspondence with index of letter in split 
              key = Split[j];
              Answer[j] = key;
              Unknown.innerHTML = Answer;    
          }
          else {}  
      }
  }
  
  var inputG = function () {
  key = event.key;
  //Create new set from Check to avoid duplicates 
  var set1 = new Set(Check);
  //Checking if key enetered is part of the word looking for 
  var k = (Split.indexOf(key));
  //Checking if set has the key
  var y = set1.has(key);
  //Conditions for if key is in word and not already in set
  if ((k === -1) && (y === false)) {
  //Conditions met, count reduced 
      Try -= 1 ;
      counter.innerHTML = Try;
         }
  //Then check is updated       
  Check+=key;
  //Then set is updated
  set1.add(key);
  //Array from set 1 is diaplayed as the already guessed letters 
  Letters.innerHTML = Array.from(set1);
  //Test
  console.log(Array.from(set1));
  
  //Game over, winning and reset conditions 
   if (Try <1 ){
     Losses.innerHTML ++;
     counter.innerHTML = 'TOO BAD YOU LOSE';
     setTimeout(start, 1000);
   }
    
   else if ((Try> 0) && (Answer.includes("_") === false)){
         Wins.innerHTML ++;
         declare(randomCategory); 
         setTimeout(start, 3000);
                     
      };
  
  
  
  }
  
  //Initialise game
  document.addEventListener('dblclick',start);
  
  
  //store letters in Answer array 
  document.addEventListener('keyup', input);
  
  document.addEventListener('keyup', inputG);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  