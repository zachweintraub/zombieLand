export class Zombie {
  constructor(name) {
    this.name = name;
    this.brainLevel = 5;
  }
  setHunger() {
    const hungerInterval = setInterval(() => {
      this. brainLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 10000);
  }
}