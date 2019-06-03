export class Zombie {
  constructor(name) {
    this.name = name;
    this.brainLevel = 5;
  }
  setHunger() {
    const hungerInterval = setInterval(() => {
      this.brainLevel--;
      if (this.didYouEatPlayer() == true) {
        clearInterval(hungerInterval);
        return "Player taste good";
      }
    }, 10000);
  }
  didYouEatPlayer() {
    if (this.brainLevel <= 0){
      return true;
    } else {
      return false;
    }
  }
  eat(brain) {
    this.brainLevel += brain.value;
  }
}