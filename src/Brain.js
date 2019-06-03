const brains = {
  small: 0.5,
  medium: 0.75,
  large: 1
}

export class Brain {
  constructor() {
    let brainOptions = ["small", "medium", "large"];
    let thisBrain = brainOptions[Math.floor(Math.random(brainOptions.length))];
    this.size = thisBrain;
    this.value = brains[thisBrain];
  }

}