 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDaKPN6KkWtdzPxNWzosjs98QxCo5DG3jM",
    authDomain: "maxapp-1559d.firebaseapp.com",
    databaseURL: "https://maxapp-1559d.firebaseio.com",
    projectId: "maxapp-1559d",
    storageBucket: "maxapp-1559d.appspot.com",
    messagingSenderId: "916522462135",
    appId: "1:916522462135:web:821d62d8372241218e9632",
    measurementId: "G-0K679QZF3P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
angular.module('starter.controllers', [])

.controller("registro",function($scope,$rootScope){

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
