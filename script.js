let output = document.getElementById("output");
let btn = document.getElementById("btn");
let copyBtn = document.getElementById("copyBtn");
let statusMessage = document.getElementById("statusMessage");

// Function to generate a random password
function generatePassword(length = 12) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Event to generate the password
btn.onclick = function () {
    let password = generatePassword();
    output.value = password;
    statusMessage.textContent = ""; // Clear status message
};

// Copy password to clipboard
copyBtn.onclick = function () {
    if (output.value) {
        navigator.clipboard.writeText(output.value)
            .then(() => {
                statusMessage.textContent = "Password copied to clipboard!";
                statusMessage.style.color = "green";
            })
            .catch(() => {
                statusMessage.textContent = "Failed to copy password.";
                statusMessage.style.color = "red";
            });
    } else {
        statusMessage.textContent = "Generate a password first!";
        statusMessage.style.color = "red";
    }
};
