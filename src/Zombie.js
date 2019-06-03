export class Zombie {
  constructor(name) {
    this.name = name;
    this.brainLevel = 60;
  }
  setHunger() {
    const hungerInterval = setInterval(() => {
      this.brainLevel --;
      if (this.didYouEatFamily() == true) {
        clearInterval(hungerInterval);
        return "Player taste good";
      }
      // console.log("zombie "+ this.brainLevel);
    }, 1000);
  }
  didYouEatFamily() {
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