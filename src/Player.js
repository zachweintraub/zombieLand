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
    let brainArray = this.getInventory();
    for(let i=0; i < brainArray.length; i++) {
      amount += brainArray[i].value;
    }
    return amount;
  }

  doesBrainFit() {
    // if (this.getBrainsAmount() + 1 > this.brainCooler.capacity) {
      if (this.getInventory().length + 1 > this.brainCooler.capacity) {
      return false;
    } else {
      return true;
    }
  }

  collectBrain(brain) {
    if(this.doesBrainFit()) {
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