
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

  user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      //End code
      });});}
getData();


function addRoom()
{
  room_name = document.getElementById("add_room").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html"
}