import { Brain } from './Brain';
import { Zombie } from './Zombie';

export class Player {
  constructor(name) {
    this.name = name;
    this.brainCooler = {
      capacity: 100,
      inventory: []
    };
  }
  getInventory() {
    return this.brainCooler.inventory;
  }
  getBrainsAmount() {
    let amount = 0;
    for(let brain in this.getInventory()) {
      console.log(`brain value is ${brain.value}`);
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
      return true;
    } else {
      return false;
    }
  }

  feed(zombie) {
    let brain = this.brainCooler.inventory.pop();
    zombie.eat(brain);
  }
}