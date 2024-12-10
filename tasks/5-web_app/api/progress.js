const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

let progress = { percentage: 0 };

app.get('/api/v1/progress', (req, res) => {
    res.json(progress);
});

app.put('/api/v1/progress', (req, res) => {
    const { percentage } = req.body;
    if (typeof percentage !== 'number' || percentage < 0 || percentage > 100) {
        return res.status(400).json({ error: 'Invalid percentage value' });
    }
    progress.percentage = percentage;
    res.json(progress);
});

app.listen(PORT, () => {
    console.log(`Progress Tracker API running on http://localhost:${PORT}`);
});