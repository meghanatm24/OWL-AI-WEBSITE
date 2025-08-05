const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Call backend and show AI reply
async function owlReply(userText) {
  addMessage("You: " + userText, 'user-msg');
  userInput.value = '';
  // Call backend API
  try {
    const response = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({message: userText}),
    });
    const data = await response.json();
    addMessage("Owl AI: " + data.reply, 'owl-msg');
  } catch {
    addMessage("Owl AI: Sorry, I can't answer right now.", 'owl-msg');
  }
}
function addMessage(text, className) {
  const msg = document.createElement('div');
  msg.textContent = text;
  msg.className = className;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if(!userText) return;
owlReply(userText);
});
userInput.addEventListener('keypress',(e)=>{
  if(e.key==='Enter'){ sendBtn.click(); }
});