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
	target.hp = target.hp - (Math.floor(Math.random() * 5) * (this.str)/2);
	console.log("The enemy has " + target.hp + " hit points left.");
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
}

function WhiteMage() {
	this.hp = 14;
	this.mp = 7;
	this.str = 2;
	this.magic = 18;
	this.def = 6;
	this.attack = baseAttack;
	this.spAttack = specialAttack;
}

function Knight() {
	this.hp = 22;
	this.mp = 2;
	this.str = 18;
	this.magic = 2;
	this.def = 14;
	this.attack = baseAttack;
	this.spAttack = specialAttack;
}

function Archer() {
	this.hp = 16;
	this.mp = 4;
	this.str = 10;
	this.magic = 10;
	this.def = 8;
	this.attack = baseAttack;
	this.spAttack = specialAttack;
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



// if selection is black mage
$('.player-class-bMage').click(function () {
	player = new BlackMage();
	$('.player-selector').remove();
	setTimeout(function () {
	$('.monster-select').css('opacity','1');
	},200);
});

// if selection is white mage
$('.player-class-wMage').click(function () {
	player = new WhiteMage();
	$('.player-selector').remove();
	setTimeout(function () {
	$('.monster-select').css('opacity','1');
	},200);
});

// if selection is knight
$('.player-class-knight').click(function () {
	player = new Knight();
	$('.player-selector').remove();
	setTimeout(function () {
	$('.monster-select').css('opacity','1');
	},200);
});

// if selection is archer
$('.player-class-archer').click(function () {
	player = new Archer();
	$('.player-selector').remove();
	setTimeout(function () {
	$('.monster-select').css('opacity','1');
	},200);
});


// battlestage

var battleStage = function () {
	var stageChance = Math.random();
	if (stageChance <0.25) {
		$('.battlefield-image').css('background', 'url(../images/castle.png) 0 0 / cover no-repeat');
	}
	else if (stageChance >= 0.25 && stageChance <0.5) {
		$('.battlefield-image').css('background', 'url(../images/tech.png) 0 0 / cover no-repeat');
	}
	else if (stageChance >= 0.5 && stageChance <0.75) {
		$('.battlefield-image').css('background', 'url(../images/field.png) 0 0 / cover no-repeat');
	}

	else {
		$('.battlefield-image').css('background', 'url(../images/forest.png) 0 0 / cover no-repeat');
	}
};

// monster select

$('.fiend').click(function (){
	monster = new WeakEnemy();
	$('.monster-select').css('opacity', '0');
	setTimeout(function (){
		$('.monster-select').hide();
	$('.battlefield').show().css('opacity', '1');
	battleStage();
	},400);
	setTimeout(function() {
		$('.opponent').css('background', 'url(../images/fiend.gif) 0 0 / contain no-repeat').animate({right: '350px', opacity: '1'}, 500);
	}, 400);
});

$('.goblin').click(function (){
	monster = new WeakEnemy();
	$('.monster-select').css('opacity', '0');
	setTimeout(function (){
		$('.monster-select').hide();
	$('.battlefield').show().css('opacity', '1');
	battleStage();
	},400);
	setTimeout(function() {
		$('.opponent').css('background', 'url(../images/goblin.gif) 0 0 / contain no-repeat').animate({right: '350px', opacity: '1'}, 500);
	}, 400);
});

$('.dragon').click(function (){
	monster = new MidEnemy();
	$('.monster-select').css('opacity', '0');
	setTimeout(function (){
		$('.monster-select').hide();
	$('.battlefield').show().css('opacity', '1');
	battleStage();
	},400);
	setTimeout(function() {
		$('.opponent').css('background', 'url(../images/dragon.gif) 0 0 / contain no-repeat').animate({right: '350px', opacity: '1'}, 500);
	}, 400);
});

$('.behemoth').click(function(){
	monster = new ToughEnemy();
	$('.monster-select').css('opacity', '0');
	setTimeout(function (){
		$('.monster-select').hide();
	$('.battlefield').show().css('opacity', '1');
	battleStage();
	},400);
	setTimeout(function() {
		$('.opponent').css('background', 'url(../images/behemoth.png) 0 0 / contain no-repeat').animate({right: '350px', opacity: '1'}, 500);
	}, 400);
});

