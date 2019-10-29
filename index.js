
   document.getElementById("alogout").style.display = "none";

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    // document.getElementById("user_div").style.display = "block";
    // document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      // var email_id = user.email;
      // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      document.getElementById("alogout").style.display = "block";

    }

  } else {
    // No user is signed in.
    window.location = 'signup/login.html'; //After successful login, user will be redirected to home.html
 
    // document.getElementById("user_div").style.display = "none";
    // document.getElementById("login_div").style.display = "block";

  }
});

  function logout(){
    alert('Do you really wanna logout');
    firebase.auth().signOut(); 
    window.location = 'signup/login.html'; //After successful login, user will be redirected to home.html
   
  }