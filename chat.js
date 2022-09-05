// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAO3i5XrQt1Cw4BdbPC1Qp-GSQnb9rPfH8",
    authDomain: "iugh-1045b.firebaseapp.com",
    projectId: "iugh-1045b",
    storageBucket: "iugh-1045b.appspot.com",
    messagingSenderId: "278265606041",
    appId: "1:278265606041:web:d30e4e0dd221193a152d08",
    measurementId: "G-G286XZQKXH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}




