
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCyLkBz7jaLLcJ7Eq5dfe4rt6cP_U321VI",
    authDomain: "aijazr.firebaseapp.com",
    databaseURL: "https://aijazr.firebaseio.com",
    projectId: "aijazr",
    storageBucket: "aijazr.appspot.com",
    messagingSenderId: "443016703997",
    appId: "1:443016703997:web:e1c556188a30871f273394",
    measurementId: "G-NHCLBMX3E4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const auth = firebase.auth();
  const db=firebase.firestore();
  db.settings({timestampInSnapshots: true});