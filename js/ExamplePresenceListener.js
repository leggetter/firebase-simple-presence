/**
 * A listener must implement:
 * userJoined( user )
 * userLeft( user )
 * userChanged( user )
 */
function ExamplePresenceListener() {
}

ExamplePresenceListener.prototype._uniqueId = function( user ) {
  return user.userId.replace(/[^a-z0-9\-\_]/gi,'');
};

ExamplePresenceListener.prototype.userJoined = function( user ) {
  $("<div/>")
    .attr("id", this._uniqueId( user ) )
    .text(user.userId + " is currently " + user.status)
    .appendTo("#presenceDiv");
};

// Update our GUI to remove the status of a user who has left.
ExamplePresenceListener.prototype.userLeft = function( user ) {
  $("#presenceDiv").children("#" + this._uniqueId( user ) )
    .remove();
};

// Update our GUI to change a user"s status.
ExamplePresenceListener.prototype.userUpdated = function( user ) {
  $("#presenceDiv").children("#" + this._uniqueId( user ) )
    .text(user.userId + " is currently " + user.status);
};