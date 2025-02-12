// function validate(){
//     let status=false;
//     let emailAdress=document.getElementById("email").value;
//     let password=document.getElementById("password").value;
//     if(emailAdress==="Ajayraj"&& password==="Ajay@123")
//      {
//         // alert("Welcome Ajayraj!");
//         status=true;

//     }
// }

function validate(email, password) {
    let status = false;


    for (let i = 0; i < credentials.length; i++) {
        if (credentials[i].email === email && credentials[i].password === password) {
            status = true;
            break;
        }
    }
    
    return status;
}