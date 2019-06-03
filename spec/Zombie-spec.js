import { Zombie } from './../src/Zombie';
import { Player } from './../src/Player';
import { Brain } from './../src/Brain';

describe('Zombie', function() {
  let zombie;
  let player;
  beforeEach(function() {
    zombie = new Zombie("JoeBob");
    player = new Player("Zach");
    jasmine.clock().install();
    zombie.setHunger();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });
  it('should have brainLevel equal 4 after 10 seconds', function() {
    jasmine.clock().tick(10001);
    expect(zombie.brainLevel).toEqual(4);
  });
  // it('should eat player if brainLevel is 0', function() {
  //   jasmine.clock().tick(50001);
  //   expect(zombie.setHunger()).toEqual("Player taste good");
  // });  
  it('should eat player if 50 seconds pass without feeding', function() {
    jasmine.clock().tick(50001);
    expect(zombie.didYouEatPlayer()).toEqual(true);
  });  
  it('should eat player if brainLevel is 0', function() {
    zombie.brainLevel = 0
    expect(zombie.didYouEatPlayer()).toEqual(true);
  });
  it('should have brainLevel > 5 after being fed', function() {
    let brain = new Brain();
    zombie.eat(brain);
    expect(zombie.brainLevel).toBeGreaterThan(5);
  });
})