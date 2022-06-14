var firebaseConfig = {
  apiKey: "AIzaSyBN2-6b44A_9S3W7KP0ZUs18NS_cvvI1fA",
  authDomain: "letschat-7e01f.firebaseapp.com",
  projectId: "letschat-7e01f",
  storageBucket: "letschat-7e01f.appspot.com",
  messagingSenderId: "184487901553",
  appId: "1:184487901553:web:3e6fd533931652ad095ed0",
 
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "letschat_room.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  