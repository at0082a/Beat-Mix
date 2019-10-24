// Drum Arrays
let kicks = [ false, false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false, false ];
let snares = [ false, false, false, false, false, false, false, false, 
              false, false, false, false, false, false, false, false ];
let hiHats = [ false, false, false, false, false, false, false, false, 
              false, false, false, false, false, false, false, false ];
let rideCymbals = [ false, false, false, false, false, false, false, false, 
                    false, false, false, false, false, false, false, false ];

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


