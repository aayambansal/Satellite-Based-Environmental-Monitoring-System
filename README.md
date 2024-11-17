# Environmental Monitoring Dashboard

A real-time environmental monitoring system built with Node.js and ECharts that visualizes satellite data to track urban development and environmental changes.

## Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/environmental-monitor.git

# Install dependencies
npm install

# Start server
npm start

# Access the dashboard
Visit http://localhost:3000
```

## Features

- Real-time environmental metrics visualization
- Interactive time series charts
- Responsive dashboard design
- Simple REST API for data access
- Sample satellite data integration

## Tech Stack

- Node.js/Express.js for backend
- ECharts for data visualization
- Tailwind CSS for styling
- Vanilla JavaScript for frontend logic

## Project Structure

```
.
├── index.html          # Main dashboard interface
├── app.js             # Frontend JavaScript
├── server.js          # Express server
├── style.css          # Custom styles
└── package.json       # Project dependencies
```

## API Endpoints

```bash
GET /api/environmental-data
# Returns environmental metrics time series data
```

Response format:
```json
[
  {
    "date": "2023",
    "greenSpace": 30,
    "urbanDensity": 70,
    "airQuality": 72,
    "forestCover": 28
  }
]
```

## Sample Data

The dashboard currently uses sample data with the following metrics:

| Metric | Description | Sample Range |
|--------|-------------|--------------|
| Green Space | Vegetation coverage | 30-45% |
| Urban Density | Built-up area | 55-70% |
| Air Quality | Air quality index | 72-85 |
| Forest Cover | Forest coverage | 28-40% |

## Development

```bash
# Run in development mode with nodemon
npm run dev
```

## Dependencies

- express: ^4.18.2
- cors: ^2.8.5
- nodemon (dev): ^3.0.2

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built as part of the NYAS Junior Academy Challenge
- Sample data structure inspired by NASA Earth Data
- Dashboard design influenced by modern environmental monitoring systems

## Future Enhancements

- [ ] Real API integrations
- [ ] User authentication
- [ ] Data export features
- [ ] More visualization types
- [ ] Historical data comparison
