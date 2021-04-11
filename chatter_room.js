var firebaseConfig = {
    apiKey: "AIzaSyDOckfP7hzihO6WMVxC9vvmeq1fV7XeYP0",
    authDomain: "project94-f4ed7.firebaseapp.com",
    projectId: "project94-f4ed7",
    storageBucket: "project94-f4ed7.appspot.com",
    messagingSenderId: "239136141091",
    appId: "1:239136141091:web:641b1193674591d7956696"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
    document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

    function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name" 
            });
            localStorage.setItem("room_name", room_name);

            window.location = "home_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
            //start code
            console.log("Room name - " +  Room_names);
            row = "<div class='room_name' id="+ Room_names + " onclick='redirectRoom(this.id)'>#"+ Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
            //end code
   });});}
getData();

function redirectRoom(name){
    console.log(name);
    localStorage.setItem("room_name", name);

    window.location = "home_page.html";
}


