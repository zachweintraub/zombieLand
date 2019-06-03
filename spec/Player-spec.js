import { Player } from './../src/Player';
import {Zombie} from './../src/Zombie';
import { Brain } from './../src/Brain';

describe('Player', function () {
  let player;
  beforeEach(function() {
    player = new Player("Zach");
  });
  it('should return instance of Player', function() {
    expect(player.name).toEqual("Zach");
  });
  it('should get brain cooler capacity', function() {
    expect(player.brainCooler.capacity).toEqual(10);
  });
  it('should collect brain when capacity allows', function() {
    
  });
})