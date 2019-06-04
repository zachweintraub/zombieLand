import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Player } from './../src/Player';
import {Zombie} from './../src/Zombie';
import { Brain } from './../src/Brain';
// import grave from './../src/img/grave.png';

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
  display();

}

function getHungerLevel() {
  if (zombie.brainLevel > 80) {
    return "not";
  } else if (zombie.brainLevel > 50) {
    return "somewhat";
  } else if (zombie.brainLevel > 30 ) {
    return "extremely";
  } else {
    return "critically";
  }
}

function getCoolerLevel() {
    return player.brainCooler.capacity - player.getInventory().length;
}

function display() {
  $('#console').text();
  $('#zombieHunger').text(getHungerLevel());
  $('#timeRemaining').text(zombie.brainLevel);
  $('#playerName').text(player.name);
  $('#brainCooler').text(getCoolerLevel());
}

function displayBrains() {
  $('#coolerContents').empty();
  let brainArray = player.getInventory();
  if (brainArray.length > 0) {

    for(let i=0; i < brainArray.length; i++) {
      
      $('#coolerContents').append(`<li>${brainArray[i].size} brain</li>`);
    }
  }

}

$(function(){
  $('#form').submit(function(e) {
    e.preventDefault();
    gameStart($('#name').val());
    let displayLoop = setInterval(function() {
      display();
    }, 1000);

  });
  $('#feed').click(function() {
    if(player.getInventory() == 0){
      alert("You have no brains to feed the zombie");
    } else {
      player.feed(zombie);
    }
    displayBrains();
    display();
  });
  $('#getBrain').click(function() {
    let brain = new Brain();
    // console.log(brain.size + "and" + brain.value);
    player.collectBrain(brain);
    displayBrains();
    display();
  })
});