function login() {
    const nameElement = document.querySelector("#name");
    localStorage.setItem("userName", nameElement.value);
    //console.log("%s", nameElement.value);
    window.location.href = "play.html";
}