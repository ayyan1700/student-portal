var loginAccount =[]
document.getElementById('login').addEventListener("click" , function(){

    var emails = document.getElementById('emails').value;
    var passwords = document.getElementById('passwords').value;

    if(!emails || !passwords){
        alert("first fill all input field!");
        return;
    }

    var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!emailPattern.test(emails)){
        alert("invalid email");
        return;
    };

    var existingAccount = JSON.parse(localStorage.getItem('loginAccount')) || [];

    const accountFound = existingAccount.some(account => account.email.toLowerCase() === emails.toLowerCase() && account.password === passwords);


    if(accountFound){
        alert("Successfully logged in!");
           window.location.href ='index2.html'
    }else{
        alert("Account not found. Please create an account.");
    };

    
 });

    document.getElementById('create').addEventListener("click" , function(){
       window.location.href ='index1.html'
    });

