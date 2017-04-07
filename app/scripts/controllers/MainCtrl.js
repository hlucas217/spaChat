(function() {
     function MainCtrl(Room) {
         var main = this;
         main.rooms = Room.all;
     }
 
     angular
         .module('spaChat')
         .controller('MainCtrl', ['Room', MainCtrl]);
 })();
