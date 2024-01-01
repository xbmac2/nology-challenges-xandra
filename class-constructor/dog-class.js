class Dog{
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.walks = [];
    
  }

  walk(distance) {
    console.log(`name goes on ${distance} km walk`)
    this.walks.push(distance);
  }

  totalWalkDistance() {
    return this.walks.reduce((total, walk) => total + walk, 0);
  }

  averageWalkDistance() {
    const average = this.totalWalkDistance() / this.walks.length;
    return average;
  }

  walksSummary() {
    console.log(`thisdog has gone on walklength walks with an average distance of average walkdistance km`);
  }
}

const wilson = new Dog("Wilson", "Labrador");
const yogi = new Dog("Yogi", "Shih Tzu");


wilson.walk(10);
wilson.walk(9);

console.log(wilson);

