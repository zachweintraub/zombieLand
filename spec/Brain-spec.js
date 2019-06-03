import { Brain } from '../src/Brain';

describe('Player', function () {
  it('should instantiate a new brain using constructor', function() {
    let brain = new Brain();
    let brainSizes = [0.5, 0.75, 1];
    expect(brainSizes).toContain(brain.value);
  });
});