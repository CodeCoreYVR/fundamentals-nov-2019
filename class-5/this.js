const counter = {
  set(n) {
    this.count = n
  },
  inc() {
    return ++this.count 
  },
  dec() {
    return --this.count
  },
  now() {
    return this.count
  }
};

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
    // if (this.speed === 'fast') {
    //   console.log('Screeeeeetch!!');
    // } else if (this.speed === 'medium') {
    //   console.log('RRrch');
    // } else if (this.speed === 'slow') {
    //   console.log('sh');
    // } else {
    //   console.log('Yikes idk how fast I\'m going!!!');
    // }
    if (typeof this.speed === 'number' && this.speed > 0) {
      console.log(`Scr${'e'.repeat(this.speed)}ch!!`);
    } else {
      console.log('Yikes idk how fast I\'m going!!!');
    }

  },
  setSpeed(kmh) {
    this.speed = kmh;
  }
  // setSpeed(kmh) {
  //   if (kmh > 120) {
  //     this.speed = 'fast'
  //   } else if (kmh > 80) {
  //     this.speed = 'medium'
  //   } else if (kmh > 0) {
  //     this.speed = 'slow'
  //   } else {
  //     this.speed = 'idk'
  //   } 
  // }
}
