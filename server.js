const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('./')); // Serve static files from current directory

// Sample data - in production, this would come from a database
const environmentalData = [
    { date: '2018', greenSpace: 45, urbanDensity: 55, airQuality: 85, forestCover: 40 },
    { date: '2019', greenSpace: 42, urbanDensity: 58, airQuality: 82, forestCover: 38 },
    { date: '2020', greenSpace: 38, urbanDensity: 62, airQuality: 79, forestCover: 35 },
    { date: '2021', greenSpace: 35, urbanDensity: 65, airQuality: 76, forestCover: 32 },
    { date: '2022', greenSpace: 32, urbanDensity: 68, airQuality: 74, forestCover: 30 },
    { date: '2023', greenSpace: 30, urbanDensity: 70, airQuality: 72, forestCover: 28 },
];

// Routes
app.get('/api/environmental-data', (req, res) => {
    res.json(environmentalData);
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
