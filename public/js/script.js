// Drum Arrays
const createEmptyDrumArray = () => new Array(16).fill(false);

// Drum Arrays
let kicks = createEmptyDrumArray();
let snares = createEmptyDrumArray();
let hiHats = createEmptyDrumArray();
let rideCymbals = createEmptyDrumArray();

function toggleDrum (array, index) {
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      array[i] = !array[i];
    }
  }
  return array;
}

function clear( array ) {
  for (let i = 0; i < array.length; i++) {
    array[i] = false;
  }
  return array;
}

function invert( array ) {
  for (let i = 0; i < array.length; i++) {
    array[i] = !array[i];
  }
  return array;
}


