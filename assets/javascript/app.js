//step 1 usrer authentification
//step 2 character build- inputs, hp, atk, saving throws, make a character form 
//step 3 DM validation
//step 4 Dynamic gameplay response
//step 5 use WoC API to get aniations for spells

$(document).ready(function(){


    var config = {
        apiKey: "AIzaSyDUvb5LS8yXuh3vaA6jPGhvUIVJw0AEumg",
        authDomain: "dandd-96f27.firebaseapp.com",
        databaseURL: "https://dandd-96f27.firebaseio.com",
        projectId: "dandd-96f27",
        storageBucket: "dandd-96f27.appspot.com",
        messagingSenderId: "294192897550"
      };
      firebase.initializeApp(config);

      database = firebase.database();
      //initialize user validaton
     
})