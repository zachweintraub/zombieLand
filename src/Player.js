import { Brain } from './Brain';

export class Player {
  constructor(name) {
    this.name = name;
    this.brainCooler = {
      capacity: 10,
      inventory: []
    }
  }
  getInventory() {
    return this.brainCooler.inventory;
  }
  getBrainsAmount() {
    let amount = 0;
    for(let brain in this.getInventory()) {
      amount += brain.size;
    }
    return amount;
  }

  doesBrainFit(brain) {
    if (this.getBrainsAmount() + brain.size > this.brainCooler.capacity) {
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
}