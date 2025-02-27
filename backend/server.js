const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// CORS Configuration (Allow only frontend access)
app.use(cors({
    origin: 'http://localhost:3000',  // Allow frontend access
    credentials: true,                // Allow cookies if needed
}));

// Middleware
app.use(express.json());

// Routes
app.use('/api/snippets', require('./routes/snippetRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Set PORT (use default 8080 if not in .env)
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
