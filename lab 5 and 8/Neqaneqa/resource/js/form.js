function validateForm() {
    var name = document.register.name.value;
    var psd = document.getElementById("password").value;

    if (name == null || name == "") {
        document.getElementById("name_error").innerHTML = "Name can't be blank";
        return false;
    } else if (psd.length < 6) {
        document.getElementById("password_error").innerHTML = "Password must be atleast 6 characters";

        return false;
    }
} 