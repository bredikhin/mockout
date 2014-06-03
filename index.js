// Listen for messages
process.on('message', function(message) {
  switch (message.event) {
    // Start the emulation
    case 'connect':
      setInterval(function() {
        console.log(JSON.stringify({sortOf: 'anObject', initializedWith: message}));
      }, 1000);
      process.send('online');
      break;

    // Shutdown request
    case 'shutdown':
      process.exit(0);
      break; 

    default:
      break;
  }
});
