(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    

    return {
      all: rooms
        rooms.$add({ room: "number" }).then(function(ref) {
            var num = ref.key;
            console.log("added room with number " + num);
            list.$indexFor(num); // returns location in the array
        });
    };
  }

  angular
    .module('spaChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
