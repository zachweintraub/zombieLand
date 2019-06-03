import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Player } from './../src/Player';
import {Zombie} from './../src/Zombie';
import { Brain } from './../src/Brain';


var player;
var zombie;

function gameStart(name) {
  $('#form').hide();
  player = new Player(name);
  zombie = new Zombie("JoeBob");
  zombie.setHunger();

  $('#zombie').show();
  $('#player').show();
  $('#console').show();
  // console.log("zombie hunger " + zombie.brainLevel);

}

function getHungerLevel() {
  console.log(`brain level ${zombie.brainLevel}`);
  if (zombie.brainLevel > 8) {
    return "not";
  } else if (zombie.brainLevel > 5) {
    return "somewhat";
  } else if (zombie.brainLevel > 3 ) {
    return "extremely";
  } else {
    return "critically";
  }
}

function getRemainingTime() {
  return zombie.brainLevel * 10;
}
function getCoolerLevel() {
  if (player.getInventory().length == 0) {
    return 0;
  } else {
    return (player.getBrainsAmount() / player.capacity * 100).toFixed(2);
  }
}

function display() {
  $('#console').text();
  $('#zombieHunger').text(getHungerLevel());
  $('#timeRemaining').text(getRemainingTime());
  $('#playerName').text(player.name);
  $('#brainCooler').text(getCoolerLevel());
  if (player.getInventory() != 0) {
    for(brain in player.getInventory()) {
      $('#coolerContents').append(`<li>${brain.size} brain</li>`);
    }
  }
}




$(function(){
  $('#form').submit(function(e) {
    e.preventDefault();
    gameStart($('#name').val());
    display();

  });
  
});