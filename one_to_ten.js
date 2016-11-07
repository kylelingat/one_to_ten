// setting variables
var hero = 'bruh';
var gender = 'boy';
var age = 15;
var weapon = 'gun';
var pronoun = null;


// condition based on gender
if (gender === 'boy') {
  pronoun = 'his';
} else if (gender === "female") {
  pronoun = 'her';
}


//age check

if (age <= 18) {
  ageB = "is just beginning";
}
else if  (age >=19 && age <=40){
  ageB = "has seen a few battles";
}
else if (age > 40){
  ageB = "has lived through many epic battles";
}

//concatenate
console.log(hero + ' is our lovable hero, who ' + ageB  + ' with his trusty ' + weapon )

// 1 fish 2 fish
var count = null;
var animal = 'zebra';

function animalHouse (a,b){
  count = a + b;
  console.log(count);
}

animalHouse(1,2);


//1 fish 2 many fish
if (count > 2 ){
  console.log('We have too many ' + animal + 's');
} else {
  console.log('Welcome to the club');
}


// avengers
var hero = 'hulk';

function avengersAssemble (avenger){
  if (avenger == 'hulk') {
    console.log(avenger + ' smash');
  }
  else if (avenger == 'ironMan') {
    console.log ('idk');
  }
  else if (avenger == 'captainAmerica') {
    console.log ('buckyyy');
  }
  else if (avenger == 'blackWidow') {
    console.log ('im a gurl');
  }
  else console.log('sorry you are not needed for this mission')
}

avengersAssemble('ironMan');


//light
lights = true;

if (lights === true){
  console.log('And then there was light')
} else {
  console.log('Lights out');
}


//car
var carType = 'toyota';
var color = 'black';
var num = 12;

if (color == 'blue' && carType == 'toyota' || color == 'red' && carType =='Lambo' || color == 'black' && carType =='Tesla'){
  console.log('We have' + color + carType )
} else {
  console.log('We dont have any ' + color + ' ' + carType +  's' + ' in stock.')
}
