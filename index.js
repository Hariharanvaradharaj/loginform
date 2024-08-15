function func(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "Entri elevate" &&  password == "admin123"){

        alert("🥳login succesfully🥳")
        let location="application.html"
        window.open("application.html");
    }
    else{
        alert("🥵login failed🥵");
    }
}

function forg(){

    let a=prompt('Enter Your E-mail Id')
    let res=a
    alert("We are Send the Password change Link In Your Mail ID - Thank u 😎")
}
