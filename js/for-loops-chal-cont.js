// Recap exercises (loops and methods)

const pets = ["pixie", "claude", "sebastian", "bug"];
// -> 1. ['claude', 'sebastian', 'bug', 'pixie']
pets.push(pets.shift());



// -> 2. ['pixie', 'bug', 'sebastian', 'claude']
pets.reverse();



// -> 3. ['bug', 'sebastian', 'pixie']
pets[2] = pets.shift();



// -> 4. ['Bug', 'Sebastian', 'Pixie]
for (let i = 0; i < pets.length; i++) {
  const capitals = pets[i][0].toUpperCase() + pets[i].slice(1);
  pets[i] = capitals;
}


console.log(pets);
// -> 5. ['Bug', 'Seb', 'Pix']

for (let i = 1; i < pets.length; i++) {
  pets[i] = pets[i].substring(0, 3);
}

//could use substring or slice
console.log(pets);