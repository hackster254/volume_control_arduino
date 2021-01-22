const {Board, Led, Sensor }= require("johnny-five")
const loudness = require('loudness')
const brightness = require('brightness')

const board = new Board()

board.on("ready",async () => {
  console.log("board is ready");

   //const volMeter = await new Sensor({ pin: "A1", threshold: 5 });
   const brightMeter = await new Sensor({ pin: "A1", threshold: 5})

  /*
    volMeter.on("change", (data) => {
    console.log(data);
    const val = volMeter.scaleTo(0, 100);
    loudness.setVolume(val)
    console.log("VOLUME:®⏳\t", val)
  });
  */

  brightMeter.on("change", (data)=> {
      // +adding  + converts to int values since
      const val = +brightMeter.fscaleTo(0,1);
      brightness.set(val);
      console.log("brightness:🔆 \t", val)
  })
});