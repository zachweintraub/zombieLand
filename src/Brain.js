const brains = {
  small: 5,
  medium: 7.5,
  large: 10
}

export class Brain {
  constructor() {
    let brainOptions = ["small", "medium", "large"];
    let thisBrain = brainOptions[Math.floor(Math.random() * brainOptions.length)];
    this.size = thisBrain;
    this.value = brains[thisBrain];
  }

}