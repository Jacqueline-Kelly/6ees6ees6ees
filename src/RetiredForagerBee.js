class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor(...args) {
    super(...args);
    this.age = 40;
    this.job = 'gamble';
    this.color = 'grey';
    this.canFly = false;
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }

  gamble(v) {
    this.treasureChest.push(v);
  }
}
