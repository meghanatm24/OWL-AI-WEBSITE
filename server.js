// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// For OpenAI, uncomment the next lines and install 'openai'
// const OpenAI = require('openai');
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
    const userMsg = req.body.message;

    const owlReplies = [
        "Hoot! That's a wise question.",
        "Owl AI encourages you to learn more.",
        "I'm pondering... Hoot-hoo!",
        "Spread your wings and ask more!",
        "Owl AI says: Stay curious."
    ];

    // Uncomment for OpenAI-powered answer:
    /*
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: 'user', content: userMsg }]
    });
    return res.json({ reply: response.choices[0].message.content });
    */

    const reply = owlReplies[Math.floor(Math.random() * owlReplies.length)];
    console.log("Reply sent:", reply);
    res.json({ reply });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
