
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  // arrowPress[1] = 'left'
  if (arrowPress) {
    var direction = arrowPress[1];
    // check with server
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');

// export default arrowPress;
