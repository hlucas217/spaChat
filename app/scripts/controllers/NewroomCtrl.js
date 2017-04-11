(function() {
    function NewroomCtrl(New, $uibModal, Room) {
        var $ctrl = this;
        $ctrl.newroom = rooms;
         
        $ctrl.toggleAnimation = function () {
            $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
        };
         
     }
 
     angular
         .module('spaChat')
         .controller('NewroomCtrl', ['New', '$uibModal', 'Room', NewroomCtrl]);
 })();
