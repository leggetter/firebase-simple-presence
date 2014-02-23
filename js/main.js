function uuid() {
  var random = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
  return random;
}

var fb = new Firebase( 'https://simple-presence.firebaseio.com' );

// Prompt the user for a name to use.
var userId = prompt("Your user ID?", uuid() );
console.log( 'User ID:', userId );

var userData = {
  other: 'arbitrary',
  data: 'about',
  the: 'user'
};
var presenceListener = new ExamplePresenceListener();
var presence = new SimplePresence( fb, userId, userData, presenceListener );

// Use idle/away/back events created by idle.js to update our status information.
document.onIdle = function () {
  presence.setUserStatus( 'idle ');
}
document.onAway = function () {
  presence.setUserStatus( 'away' );
}
document.onBack = function (isIdle, isAway) {
  presence.setUserStatus( 'online' );
}

setIdleTimeout(5000);
setAwayTimeout(10000);