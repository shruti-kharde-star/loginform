function login(){
    var Email=document.getElementById("Email").value;
    var password=document.getElementById("password").value;

    if(!Email || !password){
        alert("All field required");
        console.log("All field required");
    }
    else if(Email=="shrutikharde@123" && password=="1234"){
       alert("login successfully");
       console.log("login successfully");
       window.open('youtube.html');
    }
    else{
        alert("please enter valid data");
        console.log("please enter valid data");
    }
}