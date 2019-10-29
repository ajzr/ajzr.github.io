/*

function signup() {  
  alert(email+' '+pswd);
    var myform = document.forms["myform"];
   const email = myform["uemail"].value; 
   const pswd = myform["upswd"].value;
 
   // create user
   auth.createUserWithEmailAndPassword(email,pswd).then(cred=>{
 console.log(cred.user);
   })
   alert(email+' '+pswd);   
     }
 

*/


function usignup() {

  var myform = document.forms["myform"];
  const email = myform["uemail"].value;
  const pswd = myform["upswd"].value;

  // create user
  auth.createUserWithEmailAndPassword(email, pswd).then(cred => {
    console.log(cred.user);

    alert(email + ' ' + pswd);
  })
}
