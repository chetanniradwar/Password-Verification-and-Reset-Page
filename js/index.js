function authenticate_pass()
{  var letters = /^[A-Za-z]+$/;
    var newpass= document.getElementById("new-pass").value;
    var confirmpass= document.getElementById("con-pass").value;
    //
    // document.getElementById("con-pass-err");
    if(newpass.length<8)
    {
        document.getElementById("new-pass-err").innerHTML="Password must be greator than 7 characters"
        document.getElementById("new-pass").classList.add("err-border")
    }
   
    else if(newpass.match(letters))
       {
        document.getElementById("new-pass-err").innerHTML="Password Should not contain only alphabets";
       }
       else{
        document.getElementById("new-pass-err").innerHTML="";
        document.getElementById("new-pass").classList.remove("err-border")
        if(newpass!=confirmpass)
       {
        document.getElementById("con-pass-err").innerHTML="Password do not match";
        document.getElementById("con-pass").classList.add("err-border");
       }
       else{
        document.getElementById("con-pass-err").innerHTML="";
        document.getElementById("con-pass").classList.remove("err-border");
        document.getElementById("pass-reset").innerHTML="Password Changed";
        document.getElementById("before-submit-block").style.display= "none";
        document.getElementById("after-submit-block").style.display= "block";
       }
    }
       
       
    

}