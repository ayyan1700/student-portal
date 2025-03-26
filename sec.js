var loginAccount = [];

document.getElementById("logins").addEventListener("click" , function (){

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;  
    var rollNum = document.getElementById('rn').value;

    if(!name || !email || !password  || !rollNum){
        alert("first fill all input field!");
        return;
    };

    var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!emailPattern.test(email)){
        alert("invalid email");
        return;
    };

    var existingAccount = JSON.parse(localStorage.getItem("loginAccount")) || [];

    var accountExists = existingAccount.some(account => account.email.toLowerCase() === email.toLowerCase());  
    var rollNumExists = existingAccount.some(account => account.rollNum === rollNum);

    if(accountExists){
        alert("An account with this email already exists. Please use a different email.");
    }else if (rollNumExists){
        alert(" the Rollnumber alraedy exist");
    }else{
        var newAccont = {
            name : name ,
            email : email , 
            password : password ,
            rollNum : rollNum ,
        };
        existingAccount.push(newAccont);

        localStorage.setItem('loginAccount', JSON.stringify(existingAccount));

        localStorage.setItem('userName', name);
        localStorage.setItem('RollNum', rollNum);
        localStorage.setItem('EmailGet', email);


        alert("create account succesfully ");

        window.location.href = "index.html"; 
    }



})

