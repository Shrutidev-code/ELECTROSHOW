function myfunc() {
    var a = document.getElementById("password").value;
    var b = document.getElementById("pass").value;
    var name = document.getElementById("username").value;
    var phone = document.getElementById("contact").value;
    var error = document.getElementById("error_msg").value;

    error_msg.style.padding = "10px";
    if (name.length < 5) {
        document.getElementById("error_msg").innerHTML = "Please Enter the Username";
        return false;
    }
    if (phone.length != 10 || isNaN(phone)) {
        document.getElementById("error_msg").innerHTML = "Please Enter the valid Number";
        return false;
    }
    if (a == "") {
        document.getElementById("error_msg").innerHTML = "Please Enter the Password";
        return false;
    }
    if (a.length < 8) {
        document.getElementById("error_msg").innerHTML = "Password length must be atleast 8 characters";
        return false;
    }
    if (a.length > 25) {
        document.getElementById("error_msg").innerHTML = "Password length must be less than 25 characters";
        return false;
    }
    if (a != b) {
        document.getElementById("error_msg").innerHTML = " Password doesn't match";
        return false;
    }
    alert("Form submit successfully!");
    return true;

}