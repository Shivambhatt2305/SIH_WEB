document.addEventListener("DOMContentLoaded", function() {
    const chatButton = document.getElementById("chatButton");
    const chatWindow = document.getElementById("chatWindow");
    const closeButton = document.getElementById("closeButton");
    const sendButton = document.getElementById("sendButton");
    const userInput = document.getElementById("userInput");
    const chatBody = document.getElementById("chatBody");

    chatButton.addEventListener("click", function() {
        chatWindow.classList.remove("hidden");
    });

    closeButton.addEventListener("click", function() {
        chatWindow.classList.add("hidden");
    });

    sendButton.addEventListener("click", function() {
        const messageText = userInput.value.trim();
        if (messageText) {
            const message = document.createElement("div");
            message.textContent = messageText;
            chatBody.appendChild(message);
            userInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
        }
    });

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendButton.click(); // Trigger send button click on Enter
        }
    });
});
