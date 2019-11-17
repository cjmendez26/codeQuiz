var time = Date.now();
var running = setInterval(run, 10); // Save this so we can clear/cancel it later

setTimeout(function() {        // Set a timer
  clearInterval(running);      // Stop the running loop
  alert('Game over!');         // Let the user know, do other stuff here
}, 30000);  