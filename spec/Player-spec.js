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
    let brain = new Brain();
    player.collectBrain(brain);
    expect(player.getInventory().length).toEqual(1);
  });
  it('should return false when collecting a brain if capacity is full', function() {
    let brain = new Brain();
    player.brainCooler.capacity = 0;
    let fit = player.doesBrainFit(brain);
    expect(fit).toBeFalsy();
  });
  it('should increase zombie.brainLevel after feeding', function() {
    let zombie = new Zombie("JoeBob");
    let brain = new Brain();
    player.feed(zombie, brain);
    expect(zombie.brainLevel).toBeGreaterThan(5);
  });
})