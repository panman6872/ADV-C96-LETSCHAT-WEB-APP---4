var firebaseConfig = {
    apiKey: "AIzaSyDH0zv1eVS8Ikit98FKPJ6_VSEzDfrRJ_k",
    authDomain: "lets-chat-1c485.firebaseapp.com",
    databaseURL: "https://lets-chat-1c485-default-rtdb.firebaseio.com",
    projectId: "lets-chat-1c485",
    storageBucket: "lets-chat-1c485.appspot.com",
    messagingSenderId: "91813078898",
    appId: "1:91813078898:web:4ab726583067be7d359feb"
  };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Wellcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name -" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_chat_page.html";

}

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "lets_chat_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "lets_chat_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
