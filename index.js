process.on('message', function(message) {
  switch (message.message) {
    case 'connect':
      setInterval(function() {
        console.log(JSON.stringify({sortOf: 'anObject', initializedWith: message}));
      }, 1000);
      process.send('online');
      break;
    case 'shutdown':
      process.exit(0);
      break; 
    default:
      break;
  }
});
