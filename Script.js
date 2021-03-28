//Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyBTBY1QlFUxtl6OiJGKBaEfUS1mpI1rVNE",
    authDomain: "myfirstproject-daa65.firebaseapp.com",
    databaseURL: "https://myfirstproject-daa65-default-rtdb.firebaseio.com",
    projectId: "myfirstproject-daa65",
    storageBucket: "myfirstproject-daa65.appspot.com",
    messagingSenderId: "818533268413",
    appId: "1:818533268413:web:7c911bf88aeec587aab0d4",
    measurementId: "G-8LC79371DS"
  };
let userobj = {
    email: document.getElementById("email"),
    password: document.getElementById("password")
}
let load = true
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function signUp() {

    var _email = document.getElementById("email");
    var _password = document.getElementById("password");

    email = _email.value,
        password = _password.value;
    firebase.database().ref("user").push({
        email: _email.value,
        password: _password.value
    });
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            if (user.email) {
                alert("Acoount Created")
                window.location.replace("./login.html");
            }
        })
        .catch((error) => {
            if (error) {
                console.log("error", error)
                alert(error.message)
            }
        })
}

function login() {
    var _email = document.getElementById("email");
    var _password = document.getElementById("password");
    email = _email.value,
        password = _password.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(data => {
        if (data.user.email) {
            window.location.replace("./dashboard.html");
        }
    })
        .catch((error) => {
            if (error) {
                console.log("error", error)
                alert(error.message)
            }
        })

}

function registerlink() {
    window.location.replace("./register.html");
}
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
