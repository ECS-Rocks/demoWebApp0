// This will be inserted into index.html by lambda_function.py.

function resetOutputArea() {
    document.getElementById("outputArea0").innerText = "Loading...";
}

function processInput() {
    let textMessage = document.getElementsByClassName("textMessage")[0].value;
    let destNumber  = document.getElementsByClassName("destNumber")[0].value;
    let authKey     = document.getElementsByClassName("authKey")[0].value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.ecs.rocks/v0/sms/sendReminderSMS", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "auth-api-key": authKey,
        "event-text": textMessage,
        "destination-number": destNumber
    }));
    xhr.onload = function() {
        let response = JSON.parse(this.responseText);
        document.getElementById("outputArea0").innerText = response.text;
    }
}
