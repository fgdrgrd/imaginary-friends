const friendSelect = document.getElementById("friendSelect");
const customFriend = document.getElementById("customFriend");
const startChat = document.getElementById("startChat");
const chatArea = document.getElementById("chatArea");
const friendName = document.getElementById("friendName");
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

let currentFriend = "";
let personality = "funny";

friendSelect.addEventListener("change", () => {
  if (friendSelect.value === "custom") {
    customFriend.style.display = "block";
  } else {
    customFriend.style.display = "none";
  }
});

startChat.addEventListener("click", () => {
  if (friendSelect.value === "custom") {
    currentFriend = document.getElementById("customName").value || "Unnamed Friend";
    personality = document.getElementById("customPersonality").value || "friendly";
  } else {
    currentFriend = friendSelect.value;
  }

  document.querySelector(".choose").style.display = "none";
  chatArea.style.display = "block";
  friendName.textContent = currentFriend;

  addMessage(`${currentFriend}`, "Hi! I'm ${currentFriend}, your ${personality} AI friend! 😊`);
});

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text === "") return;

  addMessage("You", text);
  userInput.value = "";

  setTimeout(() => {
    const reply = generateReply(text);
    addMessage(currentFriend, reply);
  }, 600);
});

function addMessage(sender, text) {
  const div = document.createElement("div");
  div.classList.add("msg", sender === "You" ? "user" : "bot");
  div.textContent = `[${sender}]: ${text}`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function generateReply(input) {
  input = input.toLowerCase();
  if (personality.includes("funny")) {
    if (input.includes("hi")) return "Hehe, hii! How’s your day, taco lover?";
    if (input.includes("sad")) return "Don’t be sad! Gubbu gives you a virtual hug 🤗";
    return "Haha! That’s so random, I love it 😆";
  }
  if (personality.includes("serious")) {
    return "Interesting... tell me more.";
  }
  return "I’m just happy to chat with you!";
}
