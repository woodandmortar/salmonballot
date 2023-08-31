// Init chatbot
import { Chatbot } from './bot.py'
// Call Flask API endpoint
const chatbot = new Chatbot('/api/create-chatbot')

async function respond(input) {
  const response = await fetch('/api/get-response', {
    body: JSON.stringify({input})
  }).then(res => res.json())

  return response.message
}

async function respond(input) {

  // Call backend API
  const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({
      input
    })
  }).then(res => res.json())

  return response.message
}



const chatbot = new Chatbot()

// Submit handler
document.getElementById('chat-submit').addEventListener('click', () => {
  const input = document.getElementById('chat-input').value
  const response = chatbot.respond(input)

  displayMessage(input)
  displayMessage(response)
})

// Display message
function displayMessage(text) {
  const chatMessages = document.getElementById('chat-messages')
  chatMessages.innerHTML += `<p>${text}</p>`
}
