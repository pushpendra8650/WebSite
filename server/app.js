// server/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Message schema
const messageSchema = new mongoose.Schema({
    name: String,
    phone: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/submit', async (req, res) => {
    try {
        const { name, phone, message } = req.body;
        const newMessage = new Message({ name, phone, message });
        await newMessage.save();
        res.json({ success: true, message: 'Data Submitted!~' });
    } catch (error) {
        res.json({ success: false, message: 'Error saving message' });
    }
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
