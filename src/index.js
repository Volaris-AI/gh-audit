const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const { pool } = require('./db');

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
