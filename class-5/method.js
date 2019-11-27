const car = {
  doors: 5,
  color: 'blue',
  hp: 200,
  // pre ES6:
  run: () => {
    console.log('running...');
  },
  // post ES6 shorthand
  openTrunk() {
    console.log('trunk opened')
  },
  // anonyonmous function
  park: function() {
    console.log('Parking...')
  },
  stop() {
    console.log('Stopping...')
  }
}
