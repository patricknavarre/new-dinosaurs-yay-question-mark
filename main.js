// Your code below.

const makeDino = function(newSpecies, newPeriod, newCarnivore, newExtinct = false) {
  return {
    species: newSpecies,
    period: newPeriod,
    carnivore: newCarnivore,
    extinct: newExtinct,
  }
  return newDino;
}

const makeExtinct = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore);
  newDino.extinct = true;

  return newDino;
}

const truncateSpecies = function (obj) {
  if (obj.species.length > 10) {
    return makeDino(obj.species.slice(0, 7) + "...", obj.period, obj.carnivore, obj.extinct)
  } else {
    return makeDino(obj.species, obj.period, obj.carnivore, obj.extinct)
  }
}








// Our code below; DO NOT TOUCH!
if (typeof makeDino === 'undefined') {
  makeDino = undefined;
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined;
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined;
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined;
}


module.exports = {
  makeDino,
  makeExtinct,
  truncateSpecies,
  makeSingular,
}
