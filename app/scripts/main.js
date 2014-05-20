"use strict";

///// Global Variables /////////////////////////////
////////////////////////////////////////////////////
var player;
var monster;

var playerStatsTemplate = _.template($('.character-stats').text());

var showStats = function (character) {
	return playerStatsTemplate(character);
};


var baseAttack = function (target) {
	var myAttack = (Math.floor(Math.random() * 5) + (this.str)/2);
	target.hp = target.hp - myAttack;
	$('.battle-log-text').append("You attacked the enemy for " + myAttack+" points of damage. <br> The enemy has " + target.hp + " hit points left.<br>");
};

var specialAttack = function (target) {
	target.hp = target.hp - (Math.floor(Math.random() * 5) + (this.magic)/2);
	this.mp = this.mp - 1;
	console.log("The enemy has " + target.hp + " hit points left.");
	console.log("You have " + this.mp + " mana left.");
};

var enemyBaseAttack = function () {
	player.hp = player.hp - ((Math.floor(Math.random() * 5) + (this.str)/2) - (player.def)/4);
	console.log("You have " + player.hp + " hit points left.");
};

var enemySpecialAttack = function () {
	player.hp = player.hp - ((Math.floor(Math.random() * 5) + (this.magic)/2) - (player.def)/4);
	console.log("You have " + player.hp + " hit points left.");
};

///// Constructors /////////////////////////////////
////////////////////////////////////////////////////

///// Classes & Enemies ////////////////////////////
////////////////////////////////////////////////////



function BlackMage() {
	this.hp = 12;
	this.mp = 6;
	this.str = 2;
	this.magic = 20;
	this.def = 6;
	this.attack = baseAttack;
	this.spAttack = specialAttack;
	this.avatar = "b-Mage";
}

function WhiteMage() {
	this.hp = 14;
	this.mp = 7;
	this.str = 2;
	this.magic = 18;
	this.def = 6;
	this.attack = baseAttack;
	this.spAttack = specialAttack;
	this.avatar = "w-Mage";
}

function Knight() {
	this.hp = 22;
	this.mp = 2;
	this.str = 12;
	this.magic = 2;
	this.def = 14;
	this.attack = baseAttack;
	this.spAttack = specialAttack;
	this.avatar = "knight";
}

function Archer() {
	this.hp = 16;
	this.mp = 4;
	this.str = 7;
	this.magic = 10;
	this.def = 8;
	this.attack = baseAttack;
	this.spAttack = specialAttack;
	this.avatar = "archer";
}
// weak enemy
function WeakEnemy() {
	this.hp = 9 + (Math.round(Math.random()*20));
	this.mp = 4 + (Math.round(Math.random()*20));
	this.str = 9 + (Math.round(Math.random()*20));
	this.magic = 9 + (Math.round(Math.random()*20));
	this.def = 9 + (Math.round(Math.random()*20));
	this.attack = enemyBaseAttack;
	this.spAttack = enemySpecialAttack;
}

// middle enemy
function MidEnemy() {
	this.hp = 15 + (Math.round(Math.random()*20));
	this.mp = 7 + (Math.round(Math.random()*20));
	this.str = 15 + (Math.round(Math.random()*20));
	this.magic = 15 + (Math.round(Math.random()*20));
	this.def = 15 + (Math.round(Math.random()*20));
	this.attack = enemyBaseAttack;
	this.spAttack = enemySpecialAttack;
}

// tough enemy
function ToughEnemy() {
	this.hp = 20 + (Math.round(Math.random()*20));
	this.mp = 12 + (Math.round(Math.random()*20));
	this.str = 20 + (Math.round(Math.random()*20));
	this.magic = 20 + (Math.round(Math.random()*20));
	this.def = 20 + (Math.round(Math.random()*20));
	this.attack = enemyBaseAttack;
	this.spAttack = enemySpecialAttack;
}

///// Interactions /////////////////////////////////
////////////////////////////////////////////////////

///// Char Select //////////////////////////////////
////////////////////////////////////////////////////

//black mage hover stats
$('.player-class-bMage').on('mouseenter', function () {
	var test = new BlackMage();
	setTimeout(function() {
	$('.bMage-stats').stop(true, true).append(showStats(test));
}, 200);
});
$('.player-class-bMage').on('mouseleave', function () {
	$('.bMage-stats').stop(true, true).html('');
});

//white mage hover stats
$('.player-class-wMage').on('mouseenter', function () {
	var test = new WhiteMage();
	setTimeout(function() {
	$('.wMage-stats').stop(true, true).append(showStats(test));
}, 200);
});
$('.player-class-wMage').on('mouseleave', function () {
	$('.wMage-stats').stop(true, true).html('');
});


//knight hover stats
$('.player-class-knight').on('mouseenter', function () {
	var test = new Knight();
	setTimeout(function() {
	$('.knight-stats').stop(true, true).append(showStats(test));
}, 200);
});
$('.player-class-knight').on('mouseleave', function () {
	$('.knight-stats').stop(true, true).html('');
});

//archer hover stats
$('.player-class-archer').on('mouseenter', function () {
	var test = new Archer();
	setTimeout(function() {
	$('.archer-stats').stop(true, true).append(showStats(test));
}, 200);
});
$('.player-class-archer').on('mouseleave', function () {
	$('.archer-stats').stop(true, true).html('');
});

// removes the player selection menu, waits 200 mSeconds and shows the monster select screen
var playerMenuAdvance = function () {
	$('.player-selector').remove();
	setTimeout(function () {
	$('.monster-select').css('opacity','1');
	},200);
};

// if selection is black mage
$('.player-class-bMage').click(function () {
	player = new BlackMage();
	playerMenuAdvance();
});

// if selection is white mage
$('.player-class-wMage').click(function () {
	player = new WhiteMage();
	playerMenuAdvance();
});

// if selection is knight
$('.player-class-knight').click(function () {
	player = new Knight();
	playerMenuAdvance();
});

// if selection is archer
$('.player-class-archer').click(function () {
	player = new Archer();
	playerMenuAdvance();
});



// battlestage

// "rolls" a random number to determine the battle backdrop
var battleStage = function () {
	var stageChance = Math.random();
	if (stageChance <0.25) {
		$('.battlefield-image').addClass('field');
	}
	else if (stageChance >= 0.25 && stageChance <0.5) {
		$('.battlefield-image').addClass('tech');
	}
	else if (stageChance >= 0.5 && stageChance <0.75) {
		$('.battlefield-image').addClass('castle');
	}

	else {
		$('.battlefield-image').addClass('forest');
	}
};

// monster select

// reduces the opacity on the enemy seleciton screen, then 400ms later hides it
// then it shows the battlefield backdrop and raises the opacity based on the classes transition based on the battlestage() roll
// next the appropriate class is added to the opponent and hero divs on the battle screen and animated in towards each other
// then the stats for both hero and enemy are run through the template to provide live stats
// finally the battle start screen is displayed after a pause
var enemyProcess = function (selectedEnemy) {
$('.monster-select').css('opacity', '0');
	setTimeout(function (){
		$('.monster-select').hide();
	$('.battlefield').show().css('opacity', '1');
	battleStage();
	},400);
	setTimeout(function() {
		$('.opponent').addClass(selectedEnemy.toLowerCase()+'-opponent').animate({right: '350px', opacity: '1'}, 500);
		$('.hero').addClass(player.avatar).animate({left: '350px', opacity: '1'}, 500);
	}, 400);
	setTimeout(function () {
		$('.hero-name').prepend(player.constructor.name);
		// $('.enemy-name').text().slice(0, selectedEnemy.length);
		$('.enemy-name').prepend(selectedEnemy);
		$('.hero-stats').text(' ');
		$('.hero-stats').append(showStats(player));
		$('.enemy-stats').text(' ');
		$('.enemy-stats').append(showStats(monster));
		$('.battle-log').animate({'opacity': '1'}, 2400);
	},100);
	setTimeout(function () {
		$('.attack-menu').show();
	}, 3000);
};



$('.fiend').click(function (){
	monster = new WeakEnemy();
	enemyProcess('Fiend');
});

$('.goblin').click(function (){
	monster = new WeakEnemy();
	enemyProcess('Goblin');
});

$('.dragon').click(function (){
	monster = new MidEnemy();
	enemyProcess('Dragon');
});

$('.behemoth').click(function(){
	monster = new ToughEnemy();
	enemyProcess('Behemoth');
});


////// Fight /////////

var isItDead = function () {
	if (monster.hp <= 0) {
		$('.battle-log-text').html(' ');
		$('.battle-log-text').append("You have defeated the enemy!");
		setTimeout(function () {
		$('.battlefield').hide();
		$('.monster-select').show().css('opacity','1');
		$('.battle-log-text').html(' ');
		monster = {};
	},1500);
	}
};

$('.attack').click(function(){
	$('.battle-log-text').animate({opacity: '0'}, 100);
	$('.hero').css({ 'left': '+=140px', 'transition': 'all .2s ease-in'});
	setTimeout(function (){
	$('.hero').css({ 'left': '-=140px'});
	$('.battle-log-text').html(' ');
	player.attack(monster);
	$('.battle-log-text').animate({opacity: '1'}, 100);
	$('.enemy-stats').html(' ');
	$('.enemy-stats').append(showStats(monster));
	isItDead();
	},200);
});
