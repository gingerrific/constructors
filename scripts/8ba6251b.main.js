"use strict";function BlackMage(){this.hp=12,this.mp=6,this.str=2,this.magic=20,this.def=6,this.attack=baseAttack,this.spAttack=specialAttack}function WhiteMage(){this.hp=14,this.mp=7,this.str=2,this.magic=18,this.def=6,this.attack=baseAttack,this.spAttack=specialAttack}function Knight(){this.hp=22,this.mp=2,this.str=18,this.magic=2,this.def=14,this.attack=baseAttack,this.spAttack=specialAttack}function Archer(){this.hp=16,this.mp=4,this.str=10,this.magic=10,this.def=8,this.attack=baseAttack,this.spAttack=specialAttack}function WeakEnemy(){this.hp=9+Math.round(20*Math.random()),this.mp=4+Math.round(20*Math.random()),this.str=9+Math.round(20*Math.random()),this.magic=9+Math.round(20*Math.random()),this.def=9+Math.round(20*Math.random()),this.attack=enemyBaseAttack,this.spAttack=enemySpecialAttack}function MidEnemy(){this.hp=15+Math.round(20*Math.random()),this.mp=7+Math.round(20*Math.random()),this.str=15+Math.round(20*Math.random()),this.magic=15+Math.round(20*Math.random()),this.def=15+Math.round(20*Math.random()),this.attack=enemyBaseAttack,this.spAttack=enemySpecialAttack}function ToughEnemy(){this.hp=20+Math.round(20*Math.random()),this.mp=12+Math.round(20*Math.random()),this.str=20+Math.round(20*Math.random()),this.magic=20+Math.round(20*Math.random()),this.def=20+Math.round(20*Math.random()),this.attack=enemyBaseAttack,this.spAttack=enemySpecialAttack}var player,playerStatsTemplate=_.template($(".character-stats").text()),showStats=function(a){return playerStatsTemplate(a)},baseAttack=function(a){a.hp=a.hp-Math.floor(5*Math.random())*this.str/2,console.log("The enemy has "+a.hp+" hit points left.")},specialAttack=function(a){a.hp=a.hp-(Math.floor(5*Math.random())+this.magic/2),this.mp=this.mp-1,console.log("The enemy has "+a.hp+" hit points left."),console.log("You have "+this.mp+" mana left.")},enemyBaseAttack=function(){player.hp=player.hp-(Math.floor(5*Math.random())+this.str/2-player.def/4),console.log("You have "+player.hp+" hit points left.")},enemySpecialAttack=function(){player.hp=player.hp-(Math.floor(5*Math.random())+this.magic/2-player.def/4),console.log("You have "+player.hp+" hit points left.")};$(".player-class-bMage").on("mouseenter",function(){var a=new BlackMage;setTimeout(function(){$(".bMage-stats").append(showStats(a))},400)}),$(".player-class-bMage").on("mouseleave",function(){$(".bMage-stats").html("")}),$(".player-class-wMage").on("mouseenter",function(){var a=new WhiteMage;setTimeout(function(){$(".wMage-stats").append(showStats(a))},400)}),$(".player-class-wMage").on("mouseleave",function(){$(".wMage-stats").html("")}),$(".player-class-knight").on("mouseenter",function(){var a=new Knight;setTimeout(function(){$(".knight-stats").append(showStats(a))},400)}),$(".player-class-knight").on("mouseleave",function(){$(".knight-stats").html("")}),$(".player-class-archer").on("mouseenter",function(){var a=new Archer;setTimeout(function(){$(".archer-stats").append(showStats(a))},400)}),$(".player-class-archer").on("mouseleave",function(){$(".archer-stats").html("")}),$(".player-class-bMage").click(function(){player=new BlackMage,$(".player-selector").remove(),setTimeout(function(){$(".monster-select").css("opacity","1")},200)}),$(".player-class-wMage").click(function(){player=new WhiteMage,$(".player-selector").remove(),setTimeout(function(){$(".monster-select").css("opacity","1")},200)}),$(".player-class-knight").click(function(){player=new Knight,$(".player-selector").remove(),setTimeout(function(){$(".monster-select").css("opacity","1")},200)}),$(".player-class-archer").click(function(){player=new Archer,$(".player-selector").remove(),setTimeout(function(){$(".monster-select").css("opacity","1")},200)});