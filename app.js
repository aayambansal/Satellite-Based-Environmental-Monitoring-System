// Initialize chart
let chart;

// Sample data - in production, this would come from your API
const sampleData = [
    { date: '2018', greenSpace: 45, urbanDensity: 55, airQuality: 85, forestCover: 40 },
    { date: '2019', greenSpace: 42, urbanDensity: 58, airQuality: 82, forestCover: 38 },
    { date: '2020', greenSpace: 38, urbanDensity: 62, airQuality: 79, forestCover: 35 },
    { date: '2021', greenSpace: 35, urbanDensity: 65, airQuality: 76, forestCover: 32 },
    { date: '2022', greenSpace: 32, urbanDensity: 68, airQuality: 74, forestCover: 30 },
    { date: '2023', greenSpace: 30, urbanDensity: 70, airQuality: 72, forestCover: 28 },
];

// Initialize the dashboard
async function initDashboard() {
    setupChart();
    updateCurrentStats();
    // In production, you would fetch real data here:
    // await fetchEnvironmentalData();
}

// Setup the metrics chart
function setupChart() {
    chart = echarts.init(document.getElementById('metricsChart'));
    
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Green Space', 'Urban Density', 'Air Quality', 'Forest Cover']
        },
        xAxis: {
            type: 'category',
            data: sampleData.map(d => d.date)
        },
        yAxis: {
            type: 'value',
            max: 100
        },
        series: [
            {
                name: 'Green Space',
                type: 'line',
                data: sampleData.map(d => d.greenSpace),
                itemStyle: { color: '#4CAF50' }
            },
            {
                name: 'Urban Density',
                type: 'line',
                data: sampleData.map(d => d.urbanDensity),
                itemStyle: { color: '#2196F3' }
            },
            {
                name: 'Air Quality',
                type: 'line',
                data: sampleData.map(d => d.airQuality),
                itemStyle: { color: '#9C27B0' }
            },
            {
                name: 'Forest Cover',
                type: 'line',
                data: sampleData.map(d => d.forestCover),
                itemStyle: { color: '#FF9800' }
            }
        ]
    };
    
    chart.setOption(option);
}

// Update current statistics
function updateCurrentStats() {
    const latestData = sampleData[sampleData.length - 1];
    
    document.getElementById('greenSpace').textContent = `${latestData.greenSpace}%`;
    document.getElementById('urbanDensity').textContent = `${latestData.urbanDensity}%`;
    document.getElementById('airQuality').textContent = `${latestData.airQuality}`;
    document.getElementById('forestCover').textContent = `${latestData.forestCover}%`;
}

// Handle window resize
window.addEventListener('resize', () => {
    chart?.resize();
});

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', initDashboard);

// In production, you would add these functions:
async function fetchEnvironmentalData() {
    try {
        const response = await axios.get('/api/environmental-data');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return sampleData; // Fallback to sample data
    }
}
