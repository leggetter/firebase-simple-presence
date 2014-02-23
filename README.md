# Simple Presence for Firebase

A reusable presence library for Firebase based on the [Firebase Presence Example](https://www.firebase.com/tutorial/#example/presence).

Ths library encapsulates the presence functionality in a `SimplePresence` object with no UI dependencies. A `listener` can be passed to be informed of presence events.

## Usage

```html
<script src="https://cdn.firebase.com/v0/firebase.js"></script>
<script src="js/SimplePresence.js"></script>
<script>
  var fb = new Firebase( 'https://YOUR.firebaseio.com/' );
  var userId = 'unique-user-id';
  var userData = { any: 'data' };
  var presence = new SimplePresence( fb, userId, userData, {
    userJoined: function( user ) {
      // indicate a new user has joined
    },
    userLeft: function( user ) {
      // indicate a user has left
    },
    userUpdated: function( user ) {
      // update existing user info
    }
  } );
</script>
```

By default a `presence` child node is created under the reference that is passed into the `SimplePresence` constructor. A new child is then created for each user that connects to the same Firebase reference.

The `presence` child can be changed by supplying a `presenceNode` option:

```javascript
var options = {
  presenceNode: 'jsChatRoom'
};
var presence = new SimplePresence( fb, userId, userData, listener, options );
```