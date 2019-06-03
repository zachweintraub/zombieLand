import { Brain } from './Brain';
import { Zombie } from './Zombie';

export class Player {
  constructor(name) {
    this.name = name;
    this.brainCooler = {
      capacity: 10,
      inventory: []
    };
  }
  getInventory() {
    return this.brainCooler.inventory;
  }
  getBrainsAmount() {
    let amount = 0;
    for(let brain in this.getInventory()) {
      amount += brain.value;
    }
    return amount;
  }

  doesBrainFit(brain) {
    if (this.getBrainsAmount() + brain.value > this.brainCooler.capacity) {
      return false;
    } else {
      return true;
    }
  }

  collectBrain(brain) {
    if(this.doesBrainFit(brain)) {
      this.brainCooler.inventory.push(brain);
    } else {
      return false;
    }
  }

  feed(zombie, brain) {
    zombie.eat(brain);
  }
}