// script.js
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatOverlay = document.getElementById('chat-overlay');
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendMessage = document.getElementById('send-message');

// Toggle chat window and overlay
chatToggle.addEventListener('click', () => {
    chatWindow.classList.toggle('chat-hidden');
    chatOverlay.classList.toggle('overlay-hidden');
});

// Close chat when clicking overlay
chatOverlay.addEventListener('click', () => {
    chatWindow.classList.add('chat-hidden');
    chatOverlay.classList.add('overlay-hidden');
});

// Send message on button click
sendMessage.addEventListener('click', sendUserMessage);

// Send message on Enter key press
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !sendMessage.disabled) sendUserMessage();
});

async function sendUserMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message
    appendMessage('user', message);
    userInput.value = '';
    sendMessage.disabled = true; // Disable button during API call
    appendMessage('ai', 'Thinking...'); // Loading indicator

    // Call AI API
    const aiResponse = await getAIResponse(message);
    chatBody.lastChild.remove(); // Remove loading message
    appendMessage('ai', aiResponse);
    sendMessage.disabled = false; // Re-enable button
}

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'ai-message'}`;
    messageDiv.textContent = text;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
}

async function getAIResponse(userMessage) {
    try {
        const response = await fetch('https://api.x.ai/grok', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY' // Replace with your API key
            },
            body: JSON.stringify({
                prompt: userMessage,
                max_tokens: 100
            })
        });

        const data = await response.json();
        return data.choices[0].text.trim() || 'Sorry, I could not process your request.';
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return 'Error: Could not connect to AI service.';
    }
}