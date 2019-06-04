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
    let brainArray = this.getInventory();
    for(let i=0; i < brainArray.length; i++) {
      amount += brainArray[i].value;
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