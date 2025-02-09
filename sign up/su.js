function handleSubmit(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem("users")) || [];
    for (var i = 0; i < users.length; i++) {
        if (users[i].username == username){
            alert("Username already exists!");
            return;
        }
    }

    users.push({username: username, password: password});
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "si.html";
}