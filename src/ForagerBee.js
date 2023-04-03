class ForagerBee extends Bee {
  // TODO..
  constructor(...args) {
    super(...args);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(v) {
    this.treasureChest.push(v);
  }
}
