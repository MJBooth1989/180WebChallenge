// Initialize Firebase
var config = {
    apiKey: "AIzaSyAg2f3t_gRZnAIde_SAUADBZ5yQdcs6G1Q",
    authDomain: "responsive-contact-form.firebaseapp.com",
    databaseURL: "https://responsive-contact-form.firebaseio.com",
    projectId: "responsive-contact-form",
    storageBucket: "responsive-contact-form.appspot.com",
    messagingSenderId: "98767679499"
  };
  firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

   var name = getInputVal('name');
   var company = getInputVal('company');
   var email= getInputVal('email');
   var phone = getInputVal('phone');
   var message = getInputVal('message');

   saveMessage(name, company, email, phone, message);

   //Show Alert
   document.querySelector('.alert').style.display = 'block';

   // hide alert after 3 seconds
    setTimeout(function(){
    document.querySelector('.alert').style.display = 'none'; 
    },3000);

    //clear form
    document.getElementById('contactForm').reset();
}

//Function to get form values
function getInputVal(id){
 return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message:message
    });
}