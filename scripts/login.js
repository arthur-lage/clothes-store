const adminLogin = {
     username: "LisaChikilindaAdmin",
     password: "lisachikisenha",
};

const button = document.getElementById("login-button")
let login = document.getElementById("user-username")
let password = document.getElementById("user-password")

button.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(login.value)
    console.log(password.value)
    if(login.value === adminLogin.username && password.value === adminLogin.password){
        window.location.href = "../pages/products.html";
    }
})