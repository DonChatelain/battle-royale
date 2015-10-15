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

	 contenderList1.push(arc, curie, franklin, salk, tesla, twain, washington);
   contenderList2.push(beethoven, einstein, gandhi, teresa, tubman, vinci, darwin);
}

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
  "buried"
];

function murdersRandomizer() {
  return Math.floor(Math.random() * murders.length);
}
function chooseMurder() {
  var rando = murdersRandomizer();
  realMurder = murders[rando];
}

function getAllBonus() {
	for (var i = 0; i < contenderListAll.length; i++) {
		contenderListAll[i].getAdv();
	}
}

function contenderRandomizer() {
  return Math.floor(Math.random() * contenderList1.length);
}


function pickContenders() {
  var elWinExtra = document.getElementById('winner-extra');
  if (contenderList1.length == 0) {
    //notWORKING??
    elWinExtra.innerHTML = "<p>END</p>";
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

function fight(contA, contB) {
  // if (contenderList1.length == 0) {
  //   console.log("stoppedFighting");
  //   return (null);
  // } else {
  	var chanceMultiplier = 1.75;

  	// console.log(contA.named + "'s advantage is " + contA.adv);
  	// console.log(contB.named + "'s advantage is " + contB.adv);

  	if (contA.adv >= contB.adv) {
  		var diff = contA.adv - contB.adv;
  		contA.chance += diff * chanceMultiplier;
  	} else {
  		var diff = contB.adv - contA.adv;
  		contA.chance -= diff * chanceMultiplier;
  	}
  	// console.log("Difference is " + diff);
  	// console.log(contA.named + "'s chance is " + contA.chance);


  	var fate = Math.floor(Math.random() * 100);
  	// console.log("Fate has chosen " + fate);

  	var elWinner = document.getElementById('winnerbox');
  	var elWinExtra = document.getElementById('winner-extra');

    chooseMurder();

  	if (fate <= contA.chance) {
  		// console.log(contA.named + " is the winner!");
  		elWinner.textContent = (contA.named);
  		elWinExtra.textContent = realMurder + " " + contB.named;
  	} else {
  		// console.log(contB.named + " is the winner!");
  		elWinner.textContent = (contB.named);
  		elWinExtra.textContent = realMurder + " " + contA.named;
  	}
  // }
}

function placePics(contA, contB) {
  // if (contenderList1.length == 0) {
  //   console.log("stoppedPlacePix");
  //   return (null);
  // } else {
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
  // }
}

function placeBonus(contA, contB) {
  // if (contenderList1.length == 0) {
  //   console.log("stoppedBonus");
  //   return (null);
  // } else {
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
  // }
}

function removeWinner() {
  // if (contenderList1.length == 0) {
  //   console.log("stoppedRemoveWinner");
  //   return (null);
  // } else {
  	var elWinner = document.getElementById('winnerbox');
  	var elWinExtra = document.getElementById('winner-extra');
  	elWinner.textContent = '';
  	elWinExtra.textContent = '';
  // }
}

var p1tracker = function() {

  	var elWinner = document.getElementById('winnerbox');
  	if (p1Choice.named === elWinner.textContent) {
  		userWinningBets += 1;
  	} else if (p2Choice.named === elWinner.textContent) {
  		userLosingBets += 1;
  	}
  	console.log("You chose " + p1Choice.named);

};

var p2tracker = function() {

  	var elWinner = document.getElementById('winnerbox');
  	if (p2Choice.named === elWinner.textContent) {
  		userWinningBets += 1;
  	} else if (p1Choice.named === elWinner.textContent) {
  		userLosingBets += 1;
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

  	// bettingChart.segments[0].value = userWinningBets;
  	// bettingChart.segments[1].value = userLosingBets;

   //  bettingChart.update();

    var ctx = document.getElementById('main-tracker').getContext('2d');

    var bettingChart = new Chart(ctx).Pie(bettingData, {
        responsive: true,
        animationEasing: 'easeInOutQuad',
        animationSteps: 50,
        segmentShowStroke: false
    });

}



//++++++++++++++++++++++++++++++++++ GLOBAL VARIABLES 'n FUNCTIONS
var userWinningBets = 0;
var userLosingBets = 0;

var bettingData = [
	{
		value: 1,
		label: 'Winning Bets',
		color: '#F4EDBB',
    highlight: '#f7f7f7'
	},
	{
		value: 2,
		label: 'Losing Bets',
		color: '#DD2719',
    highlight: 'crimson'
	}
];

var contenderListAll = new Array();
var contenderList1 = new Array();
var contenderList2 = new Array();
var contenderListOut = new Array();
var realMurder;
getContenderLists();
console.log("murder list: " + murders.length);
getAllBonus();
var p1Choice;
var p2Choice;
sendTracker();
var goButton = document.getElementById('button');
var p1 = document.getElementById('left-container');
var p2 = document.getElementById('right-container');

//+++++++++++++++++++++++++++++++++++++++++++++ EVENT LISTENERS

goButton.addEventListener('click', function() {
	pickContenders();
	placePics(p1Choice, p2Choice);
	placeBonus(p1Choice, p2Choice);
	removeWinner();
});

// while (contenderList1.length > 0) {
  p1.addEventListener('click', function() {
  	fight(p1Choice, p2Choice);
  	p1tracker();
  	sendTracker();
  	console.log("Running winning bets: " + userWinningBets);
  	console.log("Running losing bets: " + userLosingBets);
  });
// }

// while (contenderList2.length > 0) {
  p2.addEventListener('click', function() {
  	fight(p1Choice, p2Choice);
  	p2tracker();
  	sendTracker();
  	console.log("Running winning bets: " + userWinningBets);
  	console.log("Running losing bets: " + userLosingBets);
  });
// }

//+++++++++++++++++++++++++++++ JSON Local storage
