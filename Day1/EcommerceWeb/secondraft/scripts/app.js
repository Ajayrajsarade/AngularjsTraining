$(document).ready(()=>{

    $("button").click(()=>{

        let email=$("#email").val();
        let password=$("#password").val();
        if(validate(email,password))
        {
            $("#message").html("Welcome to Transflower");
        }
        else{
            $("#message").html("Invalid user please try again.");
        }
    })
})

// function authenticate(email,password){
//     console.log("authetivate is called");

//     let email=document.getElementById("email").value;
//     let password=document.getElementById("password").value;
//     validate(email,password);
// }