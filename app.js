var Contender = function(named, promCent, warExp, isBadass, isAlcoholic, isGenius, isHuman, img) {
	this.named = named;
	this.promCent = promCent;
	this.warExp = warExp;
	this.isBadass = isBadass;
	this.isAlcoholic = isAlcoholic;
	this.isGenius = isGenius;
	this.isHuman = isHuman;
	this.img = img;
	this.chance = 50;
	this.adv = 0;
  this.enabled = true;
	this.bonusList = [];
	contenderListAll.push(this);

	this.getAdv = function(){
		if (this.isBadass === true) {
			this.adv += 7;
			this.bonusList.push("BONAFIDE BADASS BONUS +700");
		} //Bonafide Badass
		if (this.warExp === 2) {
			this.adv += 7;
			this.bonusList.push("WAR HERO +700");
		} else if (this.warExp === 1) {
			this.adv += 4;
			this.bonusList.push("FIGHTER +400");
		} //War Experience - War Hero / Figher / Civilian
		if (this.isAlcoholic === true) {
			this.adv -= 2;
			this.bonusList.push("ALCOHOLISM -200");
		} //Alcholic Burdon
 		if (this.isGenius === true) {
 			this.adv += 5;
 			this.bonusList.push("GENIUS BONUS +500");
 		} //Genius Bonus
 		if (this.isHuman === true) {
 			this.adv += 5;
 			this.bonusList.push("HUMANITARIAN +500");
 		}
	};
};

var imgs = new Array();
imgs[0] = new Image();
imgs[0].src = 'images/arc.jpg';
imgs[1] = new Image();
imgs[1].src = 'images/beethoven.jpg';
imgs[2] = new Image();
imgs[2].src = 'images/curie.jpg';
imgs[3] = new Image();
imgs[3].src = 'images/einstein.jpg';
imgs[4] = new Image();
imgs[4].src = 'images/franklin.jpg';
imgs[5] = new Image();
imgs[5].src = 'images/gandhi.jpg';
imgs[6] = new Image();
imgs[6].src = 'images/salk.jpg';
imgs[7] = new Image();
imgs[7].src = 'images/teresa.jpg';
imgs[8] = new Image();
imgs[8].src = 'images/tesla.jpg';
imgs[9] = new Image();
imgs[9].src = 'images/tubman.jpg';
imgs[10] = new Image();
imgs[10].src = 'images/twain.jpg';
imgs[11] = new Image();
imgs[11].src = 'images/vinci.jpg';
imgs[12] = new Image();
imgs[12].src = 'images/washington.jpg';
imgs[13] = new Image();
imgs[13].src = 'images/darwin.jpg';
imgs[14] = new Image();
imgs[14].src = 'images/mlk.jpg';
imgs[15] = new Image();
imgs[15].src = 'images/copernicus.jpg';
imgs[16] = new Image();
imgs[16].src = 'images/wright.jpg';
imgs[17] = new Image();
imgs[17].src = 'images/lewisclark.jpg';

imgs[18] = new Image();
imgs[18].src = 'images/question-left.jpg';
imgs[19] = new Image();
imgs[19].src = 'images/question-right.jpg';

var murders = [
  "eviscerated",
  "lacerated",
  "drowned",
  "quartered",
  "incinerated",
  "ran over",
  "straight up killed",
  "called in an airstrike on",
  "smoked",
  "decapitated",
  "shanked",
  "electrocuted",
  "murdered",
  "flayed",
  "iced",
  "unleashed a pack of hellion spawns on",
  "unleashed the Kraken upon",
  "ate",
  "slayed",
  "slaughtered",
  "fried",
  "strangled",
  "dropped a piano on",
  "buried",
  "crucified",
  "disemboweled",
  "squashed",
  "swatted",
  "sat down for a nice tea with, and then killed",
  "defenestrated",
  "vaporized",
  "enjoyed a soup composed primarily of"
];

function getContenderLists() {
	var arc = new Contender("Joan of Arc", 13, 2, true, false, false, false, imgs[0]);
	var beethoven = new Contender("Ludwig Beethoven", 15, 0, false, false, true, false, imgs[1]);
  var curie = new Contender("Marie Curie", 20, 0, false, false, true, true, imgs[2]);
	var einstein = new Contender("Albert Einstein", 20, 0, false, false, true, true, imgs[3]);
	var franklin = new Contender("Benjamin Franklin", 18, 1, false, false, true, false, imgs[4]);
  var gandhi = new Contender("Mahatma Gandhi", 20, 0, false, false, false, true, imgs[5]);
  var salk = new Contender("Jonas Salk", 20, 0, false, false, true, true, imgs[6]);
  var teresa = new Contender("Mother Teresa", 20, 0, false, false, false, true, imgs[7]);
	var tesla = new Contender("Nikola Tesla", 19, 0, false, true, true, false, imgs[8]);
  var tubman = new Contender("Harriet Tubman", 19, 0, true, false, false, true, imgs[9]);
	var twain = new Contender("Mark Twain", 19, 1, true, true, false, false, imgs[10]);
  var vinci = new Contender("Leo da Vinci", 15, 0, false, false, true, false, imgs[11]);
  var washington = new Contender("George Washington", 18, 2, true, false, false, false, imgs[12]);
  var darwin = new Contender("Charles Darwin", 19, 0, false, false, true, false, imgs[13]);
  var mlk = new Contender("Martin Luther King Jr.", 20, 0, false, false, false, true, imgs[14]);
  var copernicus = new Contender("Nicolaus Copernicus", 17, 0, false, false, true, false, imgs[15]);
  var wright = new Contender("Frank Lloyd Wright", 20, 0, false, false, true, false, imgs[16]);
  var lewisClark = new Contender("Lewis and Clark", 19, 1, true, true, false, false, imgs[17]);

	 contenderList1.push(arc, curie, franklin, salk, tesla, twain, washington, mlk, wright);
   contenderList2.push(beethoven, einstein, gandhi, teresa, tubman, vinci, darwin, copernicus, lewisClark);
}

function murdersRandomizer() {
  return Math.floor(Math.random() * murders.length);
}
function chooseMurder() {
  var rando = murdersRandomizer();
  realMurder = murders[rando].toUpperCase();
}

function contenderRandomizer() {
  return Math.floor(Math.random() * contenderList1.length);
}
function pickContenders() {
  var elWinExtra = document.getElementById('winner-extra');
  if (contenderList1.length == 0) {
    //notWORKING??
    elWinExtra.textContent = "THANKS FOR PLAYING!";
    console.log("stoppedPickContenders");
    return (null);
  } else {
    var r1 = contenderRandomizer();
    var r2 = contenderRandomizer();

    p1Choice = contenderList1[r1];
    p2Choice = contenderList2[r2];

    var discarded1 = contenderList1.splice(r1,1);
    var discarded2 = contenderList2.splice(r2,1);

    for(var i = 0; i < discarded1.length; i++) {
      console.log("discarded1: " + discarded1[i].named);
    }
    for(var i = 0; i < discarded2.length; i++) {
      console.log("discarded2: " + discarded2[i].named);
    }
  }
}

function tempPics() {
    var p1Pic = document.getElementById('left-pic');
    var p2Pic = document.getElementById('right-pic');
    p1Pic.appendChild(imgs[18]);
    p2Pic.appendChild(imgs[19]);
//    setTimeout(function() {for (var i in contenderListAll) p1Pic.appendChild(imgs[i])}, 300);
    // for (var i = 0; i < contenderListAll.length; i++) {
    //   p1Pic.replaceChild(imgs[i], p1Pic.firstChild);
    //   setTimeout(function() {console.log('running loop');}, 100);

    // } //Planned to slot machine pics before landing on one
}
function placePics(contA, contB) {
  	var p1Pic = document.getElementById('left-pic');
  	var p2Pic = document.getElementById('right-pic');
  	var p1Name = document.getElementById('left-nametag');
  	var p2Name = document.getElementById('right-nametag');

  	if (p1Pic.firstChild) {
  		p1Pic.removeChild(p1Pic.firstChild);
  		p2Pic.removeChild(p2Pic.firstChild);
  	}
  	p1Pic.appendChild(contA.img);
  	p2Pic.appendChild(contB.img);
  	p1Name.textContent = contA.named;
  	p2Name.textContent = contB.named;
}

function getAllBonus() {
  for (var i = 0; i < contenderListAll.length; i++) {
    contenderListAll[i].getAdv();
  }
}
function placeBonus(contA, contB) {
  	var p1List = document.getElementById('left-bonus');
  	var p2List = document.getElementById('right-bonus');

  	while (p1List.hasChildNodes()) {
  		p1List.removeChild(p1List.lastChild);
  		p1List.innerHTML = '';
  	}
  	while (p2List.hasChildNodes()) {
  		p2List.removeChild(p2List.lastChild);
  		p1List.innerHTML = '';
  	}
  	for (var i = 0; i < contA.bonusList.length; i++) {
  		var itemA = document.createElement('li');
  		itemA.appendChild(document.createTextNode(contA.bonusList[i]));
  		p1List.appendChild(itemA);
  	}
  	for (var j = 0; j < contB.bonusList.length; j++) {
  		var itemB = document.createElement('li');
  		itemB.appendChild(document.createTextNode(contB.bonusList[j]));
  		p2List.appendChild(itemB);
  	}
}

function removeWinner() {
  	var elWinner = document.getElementById('winnerbox');
  	var elWinExtra = document.getElementById('winner-extra');
    var elWinChose = document.getElementById('winner-chose');
  	elWinner.textContent = '';
  	elWinExtra.textContent = '';
    elWinChose.textContent = '';
}

function fight(contA, contB) {
    var chanceMultiplier = 1.75;

    if (contA.adv >= contB.adv) {
      var diff = contA.adv - contB.adv;
      contA.chance += diff * chanceMultiplier;
    } else {
      var diff = contB.adv - contA.adv;
      contA.chance -= diff * chanceMultiplier;
    }
    var fate = Math.floor(Math.random() * 100);

    var elWinner = document.getElementById('winnerbox');
    var elWinExtra = document.getElementById('winner-extra');

    chooseMurder();

    if (fate <= contA.chance) {
      elWinner.textContent = (contA.named);
      elWinExtra.textContent = realMurder + " " + contB.named;
    } else {
      elWinner.textContent = (contB.named);
      elWinExtra.textContent = realMurder + " " + contA.named;
    }
}

var p1tracker = function() {
  	var elWinner = document.getElementById('winnerbox');
    var elWinChose = document.getElementById('winner-chose');

  	if (p1Choice.named === elWinner.textContent) {
  		userWinningBets += 1;
       elWinChose.className = "right-choice";
      elWinChose.textContent = "You Chose Right!";
  	} else if (p2Choice.named === elWinner.textContent) {
  		userLosingBets += 1;
      elWinChose.className ="wrong-choice";
      elWinChose.textContent = "You Chose Wrong";
  	}
  	console.log("You chose " + p1Choice.named);
};
var p2tracker = function() {
    var elWinner = document.getElementById('winnerbox');
    var elWinChose = document.getElementById('winner-chose');

  	if (p2Choice.named === elWinner.textContent) {
  		userWinningBets += 1;
      elWinChose.className = "right-choice";
      elWinChose.textContent = "You Chose Right!";
  	} else if (p1Choice.named === elWinner.textContent) {
  		userLosingBets += 1;
      elWinChose.className ="wrong-choice";
      elWinChose.textContent = "You Chose Wrong";
  	}
  	console.log("You chose " + p2Choice.named);
};
function sendTracker() {
  	var elWinTracker = document.getElementById('win-tracker');
  	var elLoseTracker = document.getElementById('lose-tracker');
  	elWinTracker.textContent = 'Winning bets: ' + userWinningBets;
  	elLoseTracker.textContent = 'Losing bets: ' + userLosingBets;

    bettingData[0].value = userWinningBets;
    bettingData[1].value = userLosingBets;

    var ctx = document.getElementById('main-tracker').getContext('2d');
    var bettingChart = new Chart(ctx).Pie(bettingData, {
        responsive: true,
        animationEasing: 'easeInOutQuad',
        animationSteps: 50,
        segmentShowStroke: false
    });
}

function localize() {
  var winBetsToStore = JSON.stringify(userWinningBets);
  var loseBetsToStore = JSON.stringify(userLosingBets);
  localStorage.setItem("Losing Bets", loseBetsToStore);
  localStorage.setItem("Winning Bets", winBetsToStore);
}
function gettifyLocal() {
  var retrievedWinsTemp = localStorage.getItem("Winning Bets");
  var retrievedLosesTemp = localStorage.getItem("Losing Bets");
  var retrievedWins = JSON.parse(retrievedWinsTemp);
  var retrievedLoses = JSON.parse(retrievedLosesTemp);
  if (retrievedWins != null) {
    userWinningBets = retrievedWins;
  } else {
    userWinningBets = 0;
  }
  if (retrievedLoses != null) {
    userLosingBets = retrievedLoses;
  } else {
    userLosingBets = 0;
  }
}

//++++++++++++++++++++++++++++++++++ GLOBAL VARIABLES 'n FUNCTIONS

var userWinningBets = 0; //declares global tracking data
var userLosingBets = 0;
var audio = new Audio('fight.mp3'); //tee-hee
var bettingData = [    //bettingData to populate graph segment values
	{
		value: userWinningBets,
		label: 'Winning Bets',
		color: 'seagreen',
    highlight: 'olivedrab'
	},
	{
		value: userLosingBets,
		label: 'Losing Bets',
		color: 'crimson',
    highlight: 'orange'
	}
];
gettifyLocal();  //Receive previously added local winning/losing bet data
var contenderListAll = new Array(); //Array for all fighters
var contenderList1 = new Array();  //Array for fighters on left side
var contenderList2 = new Array();  //Array for fighters on right side
var realMurder; //Declares global murder verb variable
getContenderLists(); //pushes contender objects to respective arrays !important
tempPics();  //Places grey questionmark Images as placeholder
getAllBonus(); //pushes each contender's bonuses to their individual bonus arrays
var p1Choice; //Global left side contender
var p2Choice; //Global right side contender
sendTracker(); //Sends initial win/lose bet data to DOM
var goButton = document.getElementById('button');
var p1 = document.getElementById('left-container');
var p2 = document.getElementById('right-container');

//+++++++++++++++++++++++++++++++++++++++++++++ EVENT LISTENERS

goButton.addEventListener('click', function() {
  removeWinner();
	pickContenders();
	placePics(p1Choice, p2Choice);
	placeBonus(p1Choice, p2Choice);

});
  p1.addEventListener('click', function() {
    // audio.play();
  	fight(p1Choice, p2Choice);
  	p1tracker();
  	sendTracker();
  	console.log("Running winning bets: " + userWinningBets);
  	console.log("Running losing bets: " + userLosingBets);
    localize();
  });
  p2.addEventListener('click', function() {
    // audio.play();
  	fight(p1Choice, p2Choice);
  	p2tracker();
  	sendTracker();
  	console.log("Running winning bets: " + userWinningBets);
  	console.log("Running losing bets: " + userLosingBets);
    localize();
  });
