// ==UserScript==
// @name Soulflare3's MonsterGame UI Fix
// @namespace https://github.com/Soulflare3/SummerGame2015
// @description Quick JS/CSS fix for overlapping text in the top UI
// @version 0.3
// @match *://steamcommunity.com/minigame/towerattack*
// @match *://steamcommunity.com//minigame/towerattack*
// @grant none
// @updateURL https://raw.githubusercontent.com/Soulflare3/SummerGame2015/master/uiFix.js
// @downloadURL https://raw.githubusercontent.com/Soulflare3/SummerGame2015/master/uiFix.js
// ==/UserScript==


var timeui = document.getElementsByClassName('game_time')[0];
timeui.style.top = "40px";
timeui.style.left = "380px";

var levelnumui = document.getElementsByClassName('level_container2')[0];
levelnumui.style.left = "500px";

var leveltimeui = document.getElementsByClassName('level_time')[0];
leveltimeui.style.top = "40px";
leveltimeui.style.left = "800px";

console.log("Soulflare3's MonsterGame UI Fix loaded");