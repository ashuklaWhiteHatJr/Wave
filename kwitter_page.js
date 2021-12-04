var firebaseConfig = {
      apiKey: "AIzaSyDpxOv5l0kUcYfgKNKwKDjFM8uif2hhxMI",
      authDomain: "multi-screen-chat.firebaseapp.com",
      databaseURL: "https://multi-screen-chat-default-rtdb.firebaseio.com",
      projectId: "multi-screen-chat",
      storageBucket: "multi-screen-chat.appspot.com",
      messagingSenderId: "474444200675",
      appId: "1:474444200675:web:40c722662cebe5e4fce3d6"
    };
   
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

